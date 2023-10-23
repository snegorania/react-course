import { nanoid } from 'nanoid';

class ToDo {

    id: string;
    text: string;

    constructor(text: string) {
        this.text = text;
        this.id = nanoid();
    }
}

export default ToDo