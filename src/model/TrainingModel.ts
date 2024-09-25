import { TrainingMemberModel } from "./TrainingMemberModel";

export interface TrainingModel {
    trainingCode?: string;
    name: string;
    description: string;
    dateTime: Date;
    maxParticipantsNumber: number;
    participantsNumber: number;
    status: string;
    category: string;
    trainingMemberList: TrainingMemberModel[];
}