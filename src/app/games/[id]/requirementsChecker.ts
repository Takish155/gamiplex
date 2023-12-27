export const requirements = (details: string) => {
  if (!details) {
    return;
  }
  const osReg = /OS(.*?)\n|(?<=OS:)(.*)(?=Processor)/;
  const processorReg = /Processor(.*?)\n|(?<=Processor:)(.*?)(?=Memory)/;
  const memoryReg = /(?<=Memory)(.*?)(?=Graphics)|Memory:(.*?)\n/;
  const graphicsReg =
    /(?<=Graphics)(.*?)(?=Storage)|Graphics:(.*?)\n|Video Card: (.*?)\n/;
  const storageReg =
    /(?<=Storage)(.*?)(?=Sound Card)|Storage:(.*?)\n|Hard Disk Space: (.*?)\n/;

  const os = details
    .match(osReg)?.[0]
    .replace(/Processor/, "")
    .replace(/OS:/, "")
    .replace(/:/, "");
  const processor = details
    .match(processorReg)?.[0]
    .replace(/Processor:/, "")
    .replace(/Memory/, "")
    .replace(/:/, "");
  const memory = details
    .match(memoryReg)?.[0]
    .replace(/Memory:/, "")
    .replace(/Graphics/, "")
    .replace(/:/, "");
  const graphics = details
    .match(graphicsReg)?.[0]
    .replace(/Graphics:/, "")
    .replace(/DirectX/, "")
    .replace(/Video Card:/, "")
    .replace(/:/, "");
  const storage = details
    .match(storageReg)?.[0]
    .replace(/Storage:/, "")
    .replace(/Hard Disk Space: /, "")
    .replace(/:/, "");

  return {
    os: os,
    processor: processor,
    memory: memory,
    graphics: graphics,
    storage: storage,
  };
};

export type RequirementsType = {
  os: string | undefined;
  processor: string | undefined;
  memory: string | undefined;
  graphics: string | undefined;
  storage: string | undefined;
};
