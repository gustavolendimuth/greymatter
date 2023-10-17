type PostTitleProps = {
  children: React.ReactNode;
};

export default function PostTitle({ children }: PostTitleProps) {
  return (
    <h1 className="mb-12 mt-0 text-center text-secondary text-6xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-7xl">
      {children}
    </h1>
  );
}
