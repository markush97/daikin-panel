import { ACModeEnum } from '../acMode.enum';

export class RoomInfo {
  name: string;
  location: string;
  tempCurrent: number;
  tempTarget: number;
  holiday: false;
  mode: ACModeEnum;
  ip: string;
}
