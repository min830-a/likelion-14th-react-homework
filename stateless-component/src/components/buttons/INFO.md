# buttons 컴포넌트 가이드

`buttons`는 업로드 과정을 표현한 버튼 컴포넌트입니다.

## 사용법

### 기본 사용법

```jsx
import Icon, { SVGICON_TYPE } from '@/components/svgIcon'

// 기본 아이콘 (위쪽 화살표)
<Icon />

// 특정 타입의 아이콘
<Icon type={SVGICON_TYPE.CHECK_MARK} />

// 크기와 색상 지정
<Icon type={SVGICON_TYPE.CROSS} size={32} color="#FF0000" />

// 접근성 레이블 추가
<Icon type={SVGICON_TYPE.SPINNER} label="로딩 중" />
```

### 지원되는 아이콘 타입

![지원되는 아이콘 실제이미지](./buttons.png)

UPLOAD_STATUS

- IDLE: 업로드
- LOADING: 업로드 중
- COMPLETE: 업로드 완료
- REJECTED: 업로드 실패
- NOT_ALLOWED: 비활성화

### 속성(props)

| 이름     | 타입    | 기본값 | 설명                                        |
| -------- | ------- | ------ | ------------------------------------------- |
| status   | string  | 'IDLE' | 업로드 상태(idle,loading,complete,rejected) |
| disabled | boolean | false  | 업로드 버튼 비활성화 여부                   |
| loading  | boolean | flase  | 업로드 로딩 애니메이션                      |

## 접근성 고려사항

- 의미 있는 아이콘에는 항상 `label` 속성을 제공해야 합니다.
- 표현 목적의 장식 아이콘인 경우, `label` 속성을 제공하지 않습니다.
