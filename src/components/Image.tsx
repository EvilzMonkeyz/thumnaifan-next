import NextImage, { ImageProps } from "next/image";

const Image = ({ ...rest }: ImageProps) => (
  <>
    <div className="w-full items-center">
      <NextImage {...rest} />
    </div>
  </>
);

export default Image;
