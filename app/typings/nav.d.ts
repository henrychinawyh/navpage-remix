export interface NavHomeLinkDataProps {
  createTime?: string;
  groupId?: number;
  icon?: string;
  id?: number;
  linkDesc?: string;
  name?: string;
  sortNo?: number;
  status?: number;
  url?: string;
}

export interface NavHomeDataProps {
  id?: number;
  groupName?: string;
  groupIcon?: string;
  links?: NavHomeLinkDataProps[];
}

export interface NavBarProps {
  navData?: NavHomeDataProps[];
  activeNavId?: number;
}

export interface ClockProps {
  type?: "default" | "light";
  timeFormat?: string;
  dateFormat?: string;
}
