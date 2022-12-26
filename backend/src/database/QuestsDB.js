import { Quest } from "../types/Quest.js";

export class QuestsDB {
    static instance = undefined;
    quests = []; // Database array

    /**
     * Gets an instance of the database
     * 
     * @returns {QuestsDB} An instance of questsDB
     */
    static getInstance() {
        if (!this.instance) {
            this.instance = new QuestsDB();
        }
        return this.instance;
    }

    /**
     * Gets all the quests in the database
     * 
     * @returns {Quest[]} An array of quests
     */
    getquests() {
        return this.quests;
    }

    /**
     * Gets a Quest with a specific id
     * 
     * @param {string} id 
     * @returns {Quest} A Quest with the specified id
     */
    getQuest(id) {
        return this.quests.find(Quest => Quest.id === id);
    }

    /**
     * Adds a Quest to the database
     * 
     * @param {Quest} Quest The Quest to add to the database
     */
    createQuest(Quest) {
        this.quests.push(Quest);
    }

    /**
     * Updates a Quest by id in the database
     * 
     * @param {string} id The id of the Quest to update
     * @param {Partial<Quest>} QuestUpdates A partial Quest object
     */
    updateQuest(id, QuestUpdates) {
        const Quest = this.getQuest(id);
        this.deleteQuest(id);
        Quest.updateQuest(QuestUpdates);
        this.createQuest(Quest);
    }

    getQuestByHeroID(heroID){
        return this.quests.filter(Quest => Quest.heroID === heroID);
    }

    /**
     * Deletes a Quest by id in the database
     * 
     * @param {string} id The id of the Quest to delete
     */
    deleteQuest(id) {
        const index = this.quests.findIndex(Quest => Quest.id === id);
        if (index >= 0) {
            this.quests.splice(index, 1);
        }
    }
}