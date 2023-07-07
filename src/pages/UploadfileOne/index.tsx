import React from "react";

import { Button, Img, Text } from "components";
import File from "components/File";

const UploadfileOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col md:gap-10 gap-[74px] items-center justify-start pb-[118px] w-full">
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
            <div className="flex flex-col gap-[51px] items-start justify-start max-w-[994px] w-full">
              <div className="flex flex-col items-start justify-start max-w-[994px] w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-center w-full">
                  <div className="bg-gray-200 border-2 border-gray-600_01 border-solid flex flex-col items-center justify-center sm:px-5 px-6 py-5 rounded-[12px] w-full">
                    <div className="h-[22px] relative w-full">
                      <div className="bg-gray-900 flex-1 h-[22px] m-auto w-full"></div>
                      <div className="absolute h-[22px] inset-[0] m-auto w-full">
                        <div className="absolute bg-gray-200 flex-1 h-[22px] inset-[0] m-auto w-full"></div>
                        <Text
                          className="absolute h-max inset-y-[0] left-[0] my-auto text-gray-600_01 text-lg w-auto"
                          size="txtInterMedium18Gray60001"
                        >
                          !
                        </Text>
                        <Text
                          className="absolute bottom-[2%] left-[2%] text-base text-gray-700 w-auto"
                          size="txtInterRegular16Gray700"
                        >
                          No files uploaded yet
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start max-w-[994px] w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-auto"
                  size="txtInterSemiBold40"
                >
                  Upload file
                </Text>
              </div>
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
                  <File className="border-[3px] border-black-900 border-solid flex flex-col h-20 items-center justify-start p-1 rounded-lg w-20" />
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

export default UploadfileOnePage;
