import express from 'express';
import { HeroesDB } from '../../database/HeroesDB.js';
import { Hero } from '../../types/Hero.js';
import { QuestsDB } from '../../database/QuestsDB.js';
import { Quest } from '../../types/Quest.js';
export function questsRouter() {
    const router = express.Router();

    // TODO: Task 1
    router.get('/heroes/:id/quests', (req, res) => {
    res.send(QuestsDB.getInstance().getQuestByHeroID(req.params.id));
});


    // TODO: Task 2
  router.post('/heroes/:id/quests', (req, res) => {
    const body = req.body;
    body.heroID = req.params.id;
    const quest = new Quest(body);
    QuestsDB.getInstance().createQuest(quest);
    res.sendStatus(201);
});



    // TODO: Task 3
    router.patch('/heroes/:heroId/quests/:questId', (req, res) => {
        
        const heroid = req.params.heroId;
        const Questid = req.params.questId;


        const body = req.body;

        const Quest = QuestsDB.getInstance().getQuest(Questid);
        const Hero = HeroesDB.getInstance().getHero(heroid);

        if (!Quest || !Hero) {
            res.sendStatus(404);
       
        }else if (Quest.heroID != heroid) {
                res.sendStatus(400);
        }
        
        else {
            QuestsDB.getInstance().updateQuest(Questid, body);
            res.sendStatus(204);
        }
    });
    // TODO: Task 4

    router.delete('/heroes/:heroId/quests/:questId', (req, res) => {
        const heroid = req.params.heroId;
        const Questid = req.params.questId;

        const Quest = QuestsDB.getInstance().getQuest(Questid);
        const Hero = HeroesDB.getInstance().getHero(heroid);

        if (!Quest || !Hero) {
            res.sendStatus(404);
        }else if (Quest.heroID != heroid) {
            res.sendStatus(400);
        }
         else {
            QuestsDB.getInstance().deleteQuest(Questid);
            res.sendStatus(204);
        }
    });

    
    return router;
}