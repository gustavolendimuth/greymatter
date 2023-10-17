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
        justifyContent: 'center',
        flexWrap: 'nowrap',
        backgroundColor: '#516f8b',
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
        <img
          src="/assets/img/greymatter-logo.png"
          alt="Satori Logo"
          style={{
            padding: 20,
            objectFit: 'contain',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 72,
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
