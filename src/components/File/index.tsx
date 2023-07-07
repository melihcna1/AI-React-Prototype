import React from "react";

import { Img } from "components";

type FileProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const File: React.FC<FileProps> = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_group3.svg')" }}
      >
        <Img
          className="h-[59px] md:h-auto object-cover w-[59px]"
          src="images/img_document.png"
          alt="document"
        />
      </div>
    </>
  );
};

File.defaultProps = {};

export default File;
