import React from "react";

import { Button, Img, List, SeekBar, Text } from "components";

const SettingsPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start pb-[118px] w-full">
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
          <div className="flex flex-col gap-[51px] items-start justify-start max-w-[994px] mt-[126px] md:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[994px] w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-auto"
                size="txtInterSemiBold40"
              >
                Settings
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start max-w-[994px] w-full">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="bg-white-A700 border-2 border-gray-200 border-solid flex flex-col gap-2.5 items-center justify-center sm:px-5 px-6 py-5 rounded-[12px] w-full">
                  <div className="flex flex-col items-center justify-center w-full">
                    <div className="flex flex-row gap-[42px] items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtInterMedium18"
                      >
                        Words in answer
                      </Text>
                      <Text
                        className="cursor-pointer text-gray-500 text-sm w-auto"
                        size="txtInterBold14"
                      >
                        100
                      </Text>
                    </div>
                  </div>
                  <SeekBar
                    inputValue={[51.19]}
                    trackColors={["#6c6c6c", "#e6e6e6"]}
                    thumbClassName="h-[17px] bg-gray-600_01 w-[17px] flex justify-center items-center rounded-[50%] outline-none"
                    className="flex h-[17px] rounded-[5px] w-[94%]"
                    trackClassName="h-1 flex rounded-[5px] w-full"
                  />{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start max-w-[994px] w-full">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="bg-white-A700 border-2 border-gray-200 border-solid flex flex-col items-center justify-center sm:px-5 px-6 py-5 rounded-[12px] w-full">
                  <div className="flex flex-col items-center justify-center w-full">
                    <div className="flex flex-row gap-[42px] items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtInterMedium18"
                      >
                        Max marginal relevance
                      </Text>
                      <div className="bg-white-A700_01 border border-blue_gray-100_01 border-solid h-4 rounded w-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <List
              className="flex flex-col gap-[51px] items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col items-start justify-start max-w-[994px] w-full">
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="bg-white-A700 border-2 border-gray-200 border-solid flex flex-col gap-2.5 items-center justify-center sm:px-5 px-6 py-5 rounded-[12px] w-full">
                    <div className="flex flex-col items-center justify-center w-full">
                      <div className="flex flex-row gap-[42px] items-center justify-start w-full">
                        <Text
                          className="text-black-900 text-lg w-auto"
                          size="txtInterMedium18"
                        >
                          Chunks to examine
                        </Text>
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtInterBold14"
                        >
                          10
                        </Text>
                      </div>
                    </div>
                    <SeekBar
                      inputValue={[51.19]}
                      trackColors={["#6c6c6c", "#e6e6e6"]}
                      thumbClassName="h-[17px] bg-gray-600_01 w-[17px] flex justify-center items-center rounded-[50%] outline-none"
                      className="flex h-[17px] rounded-[5px] w-[94%]"
                      trackClassName="h-1 flex rounded-[5px] w-full"
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start max-w-[994px] w-full">
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="bg-white-A700 border-2 border-gray-200 border-solid flex flex-col gap-2.5 items-center justify-center sm:px-5 px-6 py-5 rounded-[12px] w-full">
                    <div className="flex flex-col items-center justify-center w-full">
                      <div className="flex flex-row gap-[42px] items-center justify-start w-full">
                        <Text
                          className="text-black-900 text-lg w-auto"
                          size="txtInterMedium18"
                        >
                          Contexts to include
                        </Text>
                        <Text
                          className="text-gray-500 text-sm w-auto"
                          size="txtInterBold14"
                        >
                          5
                        </Text>
                      </div>
                    </div>
                    <SeekBar
                      inputValue={[51.19]}
                      trackColors={["#6c6c6c", "#e6e6e6"]}
                      thumbClassName="h-[17px] bg-gray-600_01 w-[17px] flex justify-center items-center rounded-[50%] outline-none"
                      className="flex h-[17px] rounded-[5px] w-[94%]"
                      trackClassName="h-1 flex rounded-[5px] w-full"
                    />{" "}
                  </div>
                </div>
              </div>
            </List>
          </div>
          <Button className="bg-black-900 cursor-pointer font-medium min-w-[131px] mt-[139px] py-[13px] rounded-[10px] text-[18.54px] text-center text-white-A700">
            Done
          </Button>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
