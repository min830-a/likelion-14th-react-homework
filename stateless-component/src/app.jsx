import Icon from '@/components/svgIcon'

export default function App() {
  return (
    <main>
      <section style={{ display: 'flex', gap: '50px', margin: '50px' }}>
        <h2>SVG 아이콘</h2>
        <Icon type="up-arrow" label="위 화살표" size={16} color="#525577" />
        <Icon type="spinner" label="로딩 중" size={24} color="#525577" />
        <Icon type="check-mark" label="완료" size={20} color="#525577" />
        <Icon type="cross" label="닫기" size={24} color="#525577" />
        <Icon type="not-allowed" label="금지" size={24} color="#e11d48" />
      </section>
    </main>
  )
}
