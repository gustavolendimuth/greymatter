// Renders the Open Graph image used on the home page

export const width = 1200;
export const height = 630;

export function OpenGraphImage(props: { title: string }) {
  const { title } = props;
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        backgroundColor: 'deep-blue',
        // backgroundImage:
        //   'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
        backgroundSize: '100px 100px',
        backgroundPosition: '0 -8px, 0 -8px',
      }}
    >
      <div
        style={{
          display: 'flex',
        }}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Teste
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 80,
          fontStyle: 'normal',
          color: 'white',
          marginTop: 0,
          lineHeight: 1.8,
          whiteSpace: 'pre-wrap',
        }}
      >
        <b>{title}</b>
      </div>
      <div
        style={{
          display: 'flex',
        }}
      />
    </div>
  );
}
