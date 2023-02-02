interface ResolutionData {
    resolution: string,
    howMuchTime: string,
    startDate: string,
    howItWillBeDone: string,
}

export class Resolution {
    emoji: string;
    noteStyle: {tiny: string, normal: string};
    data: ResolutionData;
    constructor(emoji: string, noteStyle: {tiny: string, normal: string}, data: ResolutionData) {
        this.emoji = emoji;
        this.noteStyle = noteStyle;
        this.data = data;
    }
}