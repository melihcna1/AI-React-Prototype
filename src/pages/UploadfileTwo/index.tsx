import React from "react";

import { Button, Img, List, Text } from "components";
import File from "components/File";

const UploadfileTwoPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col md:gap-10 gap-[187px] items-center justify-start pb-[118px] w-full">
          <div className="bg-white-A700_4c border-b border-blue_gray-100 border-solid flex flex-row items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-row gap-2 items-center justify-center ml-[59px] md:px-5 w-[4%]">
              <Img
                className="h-0.5"
                src="images/img_arrow1.svg"
                alt="arrowOne"
              />
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-black-900 text-lg w-auto"
                    size="txtInterMedium18"
                  >
                    Back{" "}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start md:px-5 w-[52%] md:w-full">
            <div className="flex flex-col items-center justify-start max-w-[994px] w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-auto"
                size="txtInterSemiBold40"
              >
                Upload file
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start max-w-[994px] mt-[63px] w-full">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="bg-white-A700 border-2 border-gray-200 border-solid flex flex-col gap-2.5 h-[220px] md:h-auto items-start justify-start sm:px-5 px-6 py-5 rounded-[12px] w-full">
                  <div className="flex flex-col items-center justify-center w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtInterMedium18"
                      >
                        Drop your files here
                      </Text>
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-2.5 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 justify-start w-auto md:w-full"
                    orientation="horizontal"
                  >
                    {new Array(8).fill({}).map((props, index) => (
                      <React.Fragment key={`File${index}`}>
                        <File
                          className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-2.5 w-full"
                          style={{
                            backgroundImage: "url('images/img_group3.svg')",
                          }}
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </List>
                </div>
              </div>
            </div>
            <Button className="bg-black-900 cursor-pointer font-medium min-w-[131px] mt-[327px] py-[13px] rounded-[10px] text-[18.54px] text-center text-white-A700">
              Done
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadfileTwoPage;
