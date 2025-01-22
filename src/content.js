(function() {
    // 파일명 정규화 및 비교를 위한 유틸리티 함수
    function normalizeAndCheckFilename(originalName) {
        const normalizedName = originalName.normalize('NFC');
        const isChanged = originalName !== normalizedName;

        // console.log({
        //     original: originalName,
        //     normalized: normalizedName,
        //     length: {
        //         original: originalName.length,
        //         normalized: normalizedName.length
        //     },
        //     changed: isChanged,
        //     comparison: originalName === normalizedName ? 'SAME' : 'DIFFERENT'
        // });

        return {
            normalizedName,
            isChanged
        };
    }

    // 파일 처리 함수
    function processFiles(files) {
        const dataTransfer = new DataTransfer();

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const { normalizedName, isChanged } = normalizeAndCheckFilename(file.name);

            if (isChanged) {
                console.log(`Converting filename: ${file.name} -> ${normalizedName}`);
                const normalizedFile = new File([file], normalizedName, {
                    type: file.type,
                    lastModified: file.lastModified
                });
                dataTransfer.items.add(normalizedFile);
            } else {
                dataTransfer.items.add(file);
            }
        }

        return dataTransfer.files;
    }

    // 파일 선택 이벤트 처리
    document.addEventListener('change', function(e) {
        if (e.target && e.target.type === 'file') {
            // console.log('File input change detected');
            e.target.files = processFiles(e.target.files);
        }
    }, true);


    // FormData 오버라이드
    const originalFormData = window.FormData;
    window.FormData = function(...args) {
        const formData = new originalFormData(...args);
        const originalAppend = formData.append;

        formData.append = function(name, value, filename) {
            if (filename) {
                const { normalizedName, isChanged } = normalizeAndCheckFilename(filename);
                return originalAppend.call(this, name, value, normalizedName);
            }
            return originalAppend.call(this, name, value, filename);
        };

        return formData;
    };

    // console.log('Drive Upload Normalizer is active');
})();