// Điều khiển video trực tiếp
const videoPlayer = document.querySelector("video");

// Đối với các chức năng phát sóng và danh sách kênh, bạn có thể sử dụng JavaScript để tạo nội dung động dựa vào dữ liệu từ cơ sở dữ liệu hoặc tệp JSON.

// Ví dụ tạo danh sách chương trình và thời gian phát sóng
const scheduleSection = document.querySelector(".schedule");
const scheduleData = [
  { name: "Chương trình A", time: "08:00 AM" },
  { name: "Chương trình B", time: "10:30 AM" },
  // Thêm các chương trình khác ở đây
];

scheduleData.forEach((program) => {
  const programElement = document.createElement("p");
  programElement.textContent = `${program.time}: ${program.name}`;
  scheduleSection.appendChild(programElement);
});

// Ví dụ tạo danh sách kênh truyền hình
const channelsSection = document.querySelector(".channels");
const channelData = [
  { name: "Kênh 1", url: "channel1_url" },
  { name: "Kênh 2", url: "channel2_url" },
  // Thêm các kênh khác ở đây
];

channelData.forEach((channel) => {
  const channelElement = document.createElement("a");
  channelElement.textContent = channel.name;
  channelElement.href = channel.url;
  channelsSection.appendChild(channelElement);
});
