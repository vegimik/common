import { Subjects } from "../enum/_subject";

export default interface Event {
  subject: Subjects;
  data: any;
}
