# Google Drive 한글 파일명 교정기 (Chrome Extension)
## 소개
Google Drive에 한글 파일명으로 파일을 업로드할 때 발생하는 파일명 깨짐 현상을 자동으로 교정해주는 Chrome 확장프로그램입니다. 한글 파일명의 정규화 방식을 NFD에서 NFC로 변경하여 파일명이 올바르게 표시되도록 합니다.

## 주요 기능
- Google Drive 파일 업로드 시 한글 파일명 자동 교정
- 다운로드 시 한글 파일명 정상 표시

## ⚠️ 중요 안내사항
- 파일 업로드 시 **반드시 파일 선택 버튼을 통해 파일을 업로드해야 합니다**
- 드래그 앤 드롭 업로드는 **지원되지 않습니다**

## 설치 방법
1. [릴리즈 페이지](https://github.com/0126kjw/Drive-Unicode-Normalizer/releases/latest)에서 최신 버전의 소스를 다운로드 합니다.
2. Chrome 브라우저의 확장프로그램 관리 페이지를 엽니다
   - 주소창에 chrome://extensions 입력 또는
   - Chrome 메뉴 → 도구 더보기 → 확장프로그램 
3. 우측 상단의 "개발자 모드"를 활성화합니다
4. 다운로드 받은 확장프로그램 폴더(src)를 드래그하여 페이지에 놓거나, "압축해제된 확장프로그램을 로드합니다" 버튼을 클릭하여 폴더(src)를 선택합니다
5. 설치가 완료되면 Chrome 주소창 옆에 확장프로그램 아이콘이 표시됩니다

## 사용 방법
### 업로드
1. Google Drive 웹사이트에 접속합니다
2. "새로 만들기" 버튼 또는 "+ 새로 만들기" 버튼을 클릭합니다
3. "파일 업로드" 메뉴를 선택합니다
4. 파일 선택 창에서 업로드할 파일을 선택합니다
5. 자동으로 파일명이 교정되어 업로드됩니다

### 다운로드
- 해당 확장프로그램 설치 시 자동으로 파일명이 교정되어 다운로드됩니다.

## 작동 원리
이 확장프로그램은 유니코드 정규화 방식 중 NFD(Normalization Form Decomposition)를 NFC(Normalization Form Composition)로 변환합니다. 예를 들어, '한글'이라는 파일명이 'ㅎㅏㄴㄱㅡㄹ'과 같이 분해되어 저장되는 것을 방지하고, 올바른 형태로 표시되도록 합니다.

## 문제 해결
- 확장프로그램이 정상적으로 작동하지 않는 경우, Chrome 브라우저를 재시작해보세요
- 여전히 문제가 있다면, 확장프로그램을 제거하고 재설치해보세요
