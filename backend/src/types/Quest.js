// | Property Name | Property Type |
// | --- | --- |
// | ID | String |
// | Name | String |
// | Description | String |
// | Hero ID | String |

import { v4 as uuid } from 'uuid';

export class Quest {
    /**
     * Creates a new Quest object
     * 
     * @param {*} args A object containing Quest properties
     */
    constructor(args) {
        this.id = uuid();
        this.name = args.name || 'John Doe';
        this.description = args.class || 'Get Diamonds';
        this.heroID = args.heroID || 1;
    }

    /**
     * Updates the Quest class with new update values
     * 
     * @param {Partial<Quest>} args The partial Quest object
     */
    updateQuest(args) {
        if (args.name) {
            this.name = args.name;
        }
        if (args.description) {
            this.description = args.description;
        }
        if (args.heroID) {
            this.heroID = args.heroID;
        }
    }
}