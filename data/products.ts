export type ProductLine = {
  title: string;
  href: string;
  summary: string;
  positioning: string;
  scenarios: string[];
  specs: string[];
  customers: string[];
};

export const productLines: ProductLine[] = [
  {
    title: "专业背景纸",
    href: "/backdrop-paper",
    summary:
      "适用于摄影棚、电商拍摄、视频内容创作、儿童摄影、宠物摄影、产品摄影等场景。支持多尺寸、多颜色、批量供货和渠道合作。",
    positioning: "专业摄影与商业内容拍摄背景材料",
    scenarios: ["摄影棚", "电商拍摄", "内容创作", "儿童摄影", "宠物摄影", "产品摄影"],
    specs: ["哑光表面", "多颜色体系", "多尺寸可选", "卷装运输", "支持定制"],
    customers: ["摄影器材店", "电商卖家", "渠道批发商", "摄影工作室"],
  },
  {
    title: "精品包装纸",
    href: "/products#packaging-paper",
    summary:
      "适用于精品手袋、礼盒、礼品包装、电商包装和品牌包装，可根据客户需求进行规格、材质和包装组合。",
    positioning: "面向品牌、电商与批发渠道的包装纸品组合",
    scenarios: ["精品手袋", "礼盒包装", "礼品包装", "电商包装", "品牌包装"],
    specs: ["材质可选", "触感丰富", "规格可组合", "包装方式可定制", "适合长期供货"],
    customers: ["包装材料批发商", "礼品渠道", "品牌客户", "电商客户"],
  },
  {
    title: "特种卡纸",
    href: "/products#card-paper",
    summary:
      "适用于印刷、包装、手工、美术培训、文创产品与渠道批发，覆盖彩色、厚卡、纹理等特种卡纸需求。",
    positioning: "适合创意、教育、包装与渠道销售的特种卡纸",
    scenarios: ["印刷", "包装", "手工", "美术培训", "文创产品", "渠道批发"],
    specs: ["颜色丰富", "克重可选", "规格稳定", "适合批量采购"],
    customers: ["文具渠道", "美术用品渠道", "印刷包装客户", "批发商"],
  },
  {
    title: "文具封面纸",
    href: "/products#stationery-paper",
    summary:
      "适用于笔记本封面、文件夹、学校办公、文具用品和美术用品等渠道，支持稳定供货和批发合作。",
    positioning: "服务学校、办公、美术与文具渠道的封面与常用纸品",
    scenarios: ["笔记本封面", "文件夹", "学校", "办公", "文具用品", "美术用品"],
    specs: ["触感细腻", "色彩丰富", "常用规格", "稳定供货", "适合批发", "支持渠道组合"],
    customers: ["文具批发商", "学校采购", "办公渠道", "美术用品渠道"],
  },
];

export const backdropSpecs = [
  { label: "宽度", value: "53 in / 86 in / 107 in / 可定制" },
  { label: "长度", value: "16 ft / 36 ft / 可定制" },
  { label: "表面", value: "哑光" },
  { label: "颜色", value: "白色、黑色、灰色、彩色系列" },
  { label: "包装", value: "纸芯卷装 + 外箱保护" },
  { label: "客户类型", value: "批发、渠道、电商、摄影器材店" },
  { label: "是否支持定制", value: "支持" },
];
