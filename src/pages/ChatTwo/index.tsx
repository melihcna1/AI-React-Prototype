import React from "react";

import { Img, Input, Text } from "components";
import File from "components/File";

const ChatTwoPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start pb-[45px] w-full">
          <div className="bg-white-A700_4c border-b border-blue_gray-100 border-solid flex flex-row items-center justify-between max-w-[1920px] px-10 sm:px-5 py-[22px] w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1840px] mx-auto md:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-black-900 text-lg w-auto"
                    size="txtInterMedium18"
                  >
                    Title
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between w-[315px]">
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-col items-start justify-start px-5 py-2.5 rounded-lg w-auto">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-base text-gray-600 w-auto"
                        size="txtInterMedium16"
                      >
                        Settings
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_link.svg"
                        alt="link"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-start mt-[86px] md:px-5 w-auto md:w-full">
            <div className="flex flex-col items-end justify-start max-w-[800px] py-6 w-full">
              <div className="flex md:flex-col flex-row gap-4 items-end justify-start max-w-[662px] w-full">
                <div className="flex md:flex-1 flex-col gap-2 items-end justify-start w-[624px] md:w-full">
                  <Text
                    className="text-blue_gray-400 text-right text-sm w-auto"
                    size="txtInterRegular14Bluegray400"
                  >
                    2.03 PM, 15 Nov
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-lg text-right w-auto"
                    size="txtInterRegular18"
                  >
                    Design development, UX/UI, product design - what is this?
                  </Text>
                </div>
                <File className="flex flex-col gap-3 h-[50px] md:h-auto items-end justify-start w-auto" />
              </div>
            </div>
            <div className="bg-gray-200 flex md:flex-col flex-row gap-2.5 items-start justify-start max-w-[800px] py-6 rounded-lg w-full">
              <div className="flex flex-1 flex-col items-start justify-center max-w-[700px] w-full">
                <div className="flex flex-col gap-6 items-start justify-start max-w-[660px] w-full">
                  <Text
                    className="text-black-900 text-right text-sm w-[108px]"
                    size="txtInterRegular14Black900"
                  >
                    2.03 PM, 15 Nov
                  </Text>
                  <Text
                    className="left-[11px] relative text-black-900 text-lg w-[700px]"
                    size="txtInterRegular18Black900"
                  >
                    <>
                      Design development, UX/UI, and product design are all
                      related terms in the field of design, but they refer to
                      slightly different aspects of the design process.
                      <br />
                      <br />
                      Design development refers...
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img
                  className="bottom-px h-5 w-5"
                  src="images/img_grid.svg"
                  alt="grid"
                />
                <Text
                  className="text-blue_gray-400 text-sm tracking-[-0.18px] w-auto"
                  size="txtInterMedium14"
                >
                  Copy
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-start justify-start max-w-[1061px] mt-[466px] md:px-5 w-full">
            <div className="flex flex-col items-center justify-end max-w-[1061px] w-full">
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <div className="h-6 md:h-[19px] relative w-6">
                  <Img
                    className="absolute h-[19px] inset-x-[0] mx-auto top-[0] w-5"
                    src="images/img_edit.svg"
                    alt="edit_One"
                  />
                  <Img
                    className="absolute bottom-[21%] h-0.5 left-[0] w-0.5"
                    src="images/img_star1_2x2.svg"
                    alt="starOne"
                  />
                  <Img
                    className="absolute bottom-[0] h-[5px] left-[0] w-[5px]"
                    src="images/img_star2_5x5.svg"
                    alt="starTwo"
                  />
                </div>
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtInterMedium16Black900"
                >
                  New dialog
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start max-w-[1061px] w-full">
              <Input
                name="sendmessage"
                placeholder="Send a message "
                className="leading-[normal] p-0 placeholder:text-gray-500 text-base text-gray-500 text-left w-full"
                wrapClassName="border border-gray-200 border-solid flex px-4 py-[11px] rounded-lg w-full"
                prefix={
                  <Img
                    className="mt-auto mb-px h-5 mr-2"
                    src="images/img_link_gray_500.svg"
                    alt="link"
                  />
                }
                suffix={
                  <Img
                    className="mt-auto mb-px h-5 ml-[35px]"
                    src="images/img_send.svg"
                    alt="send"
                  />
                }
              ></Input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatTwoPage;
