import React from "react";

import { Button, Img, Input, Text } from "components";

const ChatOnePage: React.FC = () => {
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
          <div className="flex flex-col md:gap-10 gap-16 items-start justify-start max-w-[994px] mt-[104px] md:px-5 w-full">
            <div className="flex flex-col gap-3 items-center justify-start max-w-[994px] w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-auto"
                size="txtInterSemiBold40"
              >
                Name
              </Text>
              <Text
                className="text-base text-gray-500 w-auto"
                size="txtInterRegular16"
              >
                Ver 4.0 Mar 14
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start max-w-[994px] w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="bg-white-A700 border-2 border-gray-200 border-solid flex flex-col items-start justify-start sm:px-5 px-6 py-5 rounded-[12px] w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Button className="bg-gray-100 flex h-12 items-center justify-center p-3 rounded-[50%] w-12">
                      <Img
                        className="h-6"
                        src="images/img_airplane.svg"
                        alt="airplane"
                      />
                    </Button>
                    <div className="flex flex-col gap-3 items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-lg w-full"
                        size="txtInterMedium18"
                      >
                        Document Question and Answer
                      </Text>
                      <Text
                        className="max-w-[946px] md:max-w-full text-gray-500 text-sm underline"
                        size="txtInterRegular14"
                      >
                        <>
                          This tool will enable asking questions of your
                          uploaded text, PDF documents, or scrape github repos.
                          It uses OpenAI&#39;s GPT models and thus you must
                          enter your API key below. This tool is under active
                          development and currently uses many tokens - up to
                          10,000 for a single query. That is $0.10-0.20 per
                          query, so please be careful!
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-start justify-start max-w-[1061px] mt-[420px] md:px-5 w-full">
            <div className="flex flex-col items-center justify-end max-w-[1061px] w-full">
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <div className="h-6 md:h-[19px] relative w-6">
                  <Img
                    className="absolute h-[19px] inset-x-[0] mx-auto top-[0] w-5"
                    src="images/img_edit.svg"
                    alt="edit"
                  />
                  <Img
                    className="absolute bottom-[21%] h-0.5 left-[0] w-0.5"
                    src="images/img_star1.svg"
                    alt="starOne"
                  />
                  <Img
                    className="absolute bottom-[0] h-[5px] left-[0] w-[5px]"
                    src="images/img_star2.svg"
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

export default ChatOnePage;
