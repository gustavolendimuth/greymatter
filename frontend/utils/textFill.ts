type TextFillProps = {
  textRef: React.RefObject<HTMLDivElement>;
  height: number;
  width: number;
  fontSize: number;
  lineHeight: number;
};

export default function textFill({ textRef, height, width, fontSize, lineHeight }: TextFillProps) {
  const textElement = textRef.current;

  if (textElement) {
    textElement.style.fontSize = `${fontSize}px`;
    textElement.style.lineHeight = `${lineHeight}`;

    while (textElement.scrollHeight > height || textElement.scrollWidth > width) {
      fontSize -= 0.5;
      lineHeight -= 0.05; // ajusta o espaçamento entre linhas
      textElement.style.fontSize = `${fontSize}px`;
      textElement.style.lineHeight = `${lineHeight}`;
    }
  }
}
