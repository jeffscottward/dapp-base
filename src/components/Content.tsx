/** @jsxImportSource theme-ui **/
const Content = ({ children }: {
  children?: any
}) => {
  return (
    <section
      className="Content"
      sx={{
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        p: 4,
        pb: 0,
      }}
    > 
      {children}
    </section>
  )
}
export default Content
