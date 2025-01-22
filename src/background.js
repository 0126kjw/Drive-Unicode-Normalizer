chrome.downloads.onDeterminingFilename.addListener((downloadItem, suggest) => {
  // 원본 파일명 로깅
  console.log('Original filename:', downloadItem.filename);
  console.log('Original filename length:', downloadItem.filename.length);

  // 파일명을 NFC로 정규화
  const normalizedFilename = downloadItem.filename.normalize('NFC');

  // 정규화된 파일명 로깅
  console.log('Normalized filename:', normalizedFilename);
  console.log('Normalized filename length:', normalizedFilename.length);

  // 파일명이 실제로 변경되었는지 확인
  const isChanged = downloadItem.filename !== normalizedFilename;
  console.log('Filename changed:', isChanged);

  if (isChanged) {
    // 정규화된 파일명으로 다운로드 제안
    suggest({
      filename: normalizedFilename,
      conflict_action: 'uniquify'
    });
  } else {
    // 파일명이 이미 NFC 형식이면 그대로 사용
    suggest({
      filename: downloadItem.filename,
      conflict_action: 'uniquify'
    });
  }

  return true;
});

// 다운로드 시작 시 처리
chrome.downloads.onCreated.addListener((downloadItem) => {
  console.log('Download started:', downloadItem.filename);
});

// 다운로드 상태 변경 시 처리
chrome.downloads.onChanged.addListener((delta) => {
  if (delta.filename) {
    console.log('Filename changed to:', delta.filename.current);
  }
  if (delta.state && delta.state.current === 'complete') {
    console.log('Download completed:', delta.id);
    // 완료된 다운로드의 정보 가져오기
    chrome.downloads.search({id: delta.id}, (downloads) => {
      if (downloads && downloads[0]) {
        console.log('Final filename:', downloads[0].filename);
        console.log('Final filename length:', downloads[0].filename.length);
      }
    });
  }
});