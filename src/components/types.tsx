export type navBarRoute = "todo" | "feed" | "prof";

export interface todo {
  id: string;
  ownerID: string;
  content: string;
  category: null | string;
  picLink: null | string;
  completed: boolean;
  publicVisibility: boolean;
}
