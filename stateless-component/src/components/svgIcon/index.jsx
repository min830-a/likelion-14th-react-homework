import { SVGICON_PATHS, SVGICON_TYPE } from './constants'
import './style.css'

/**
 * SVG 아이콘 컴포넌트
 * @param {Object} props
 * @param {string} props.type - 아이콘 타입 ('spinner', 'up-arrow', 'check-mark', 'cross', 'not-allowed')
 * @param {string} props.label - 접근성을 위한 레이블 (비어있을 경우, 표현 이미지 처리)
 * @param {number} props.size - 아이콘 크기
 * @param {string} props.color - 아이콘 색상
 */

export default function Icon({
  type = SVGICON_TYPE.UP_ARROW,
  label = '',
  size = 16,
  color = '#525577',
}) {
  // 스피너일경우, 스피너 컴포넌트 렌더링
  if (type === SVGICON_TYPE.SPINNER) {
    return <Spinner label={label} size={size} color={color} />
  }

  // 나머지 svg 아이콘 렌더링
  // 아이콘 타입이 있으면 쓰고 아니면 up-arrow 사용
  const path = SVGICON_PATHS[type] || SVGICON_PATHS[SVGICON_TYPE.UP_ARROW]
  const ariaProps = label ? { 'aria-label': label } : { 'aria-hidden': 'true' }

  return (
    <svg
      role="img"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 12 12"
      {...ariaProps}
    >
      <path fill={color} fillRule="evenodd" d={path} clipRule="evenodd" />
    </svg>
  )
}

// 스피너 컴포넌트
function Spinner({ label = '로딩 중...', size = 16, color = '#525577' }) {
  const ariaProps = label
    ? { 'aria-label': label, 'title': label }
    : { 'aria-hidden': 'true' }

  return (
    <svg
      role="img"
      width={size}
      height={size}
      stroke={color}
      viewBox="0 0 24 24"
      {...ariaProps}
    >
      <g className="spinner_V8m1">
        <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="3" />
      </g>
    </svg>
  )
}
