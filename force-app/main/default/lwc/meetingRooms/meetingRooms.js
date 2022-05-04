import { LightningElement, track } from "lwc";

export default class MeetingRooms extends LightningElement {
  @track selectedMeetingRoom;
  meetingRooms = [
    { roomName: "A-01", roomCapacity: "12" },
    { roomName: "A-02", roomCapacity: "13" },
    { roomName: "A-03", roomCapacity: "14" },
    { roomName: "A-04", roomCapacity: "15" },
    { roomName: "A-05", roomCapacity: "16" },
    { roomName: "A-06", roomCapacity: "17" },
    { roomName: "A-07", roomCapacity: "18" },
    { roomName: "A-08", roomCapacity: "19" }
  ];

  onTileSelectHandler(e) {
    const meetingRoomInfo = e.detail;
    this.selectedMeetingRoom = meetingRoomInfo.roomName;
  }

  constructor() {
    super();
    this.template.addEventListener(
      "tileclick",
      this.onTileSelectHandler.bind(this)
    );
  }
}
