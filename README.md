rkouts` WHERE `id` = 2
Executing (default): SELECT `id`, `type`, `duration`, `calories`, `createdAt`, `updatedAt`, `UserId` FROM `Workouts` AS `Workout` WHERE `Workout`.`UserId` = 1;
Executing (default): SELECT `id`, `name`, `sets`, `reps`, `weight`, `createdAt`, `updatedAt`, `WorkoutId` FROM `Exercises` AS `Exercise`;
Executing (default): INSERT INTO `Exercises` (`id`,`name`,`sets`,`reps`,`weight`,`createdAt`,`updatedAt`,`WorkoutId`) VALUES (NULL,$1,$2,$3,$4,$5,$6,$7);
Executing (default): SELECT `id`, `name`, `sets`, `reps`, `weight`, `createdAt`, `updatedAt`, `WorkoutId` FROM `Exercises` AS `Exercise` WHERE `Exercise`.`id` = '1';
Executing (default): SELECT `id`, `name`, `sets`, `reps`, `weight`, `createdAt`, `updatedAt`, `WorkoutId` FR`Exercises` AS `Exercise` WHERE `Exercise`.`id` = '2';
Executing (default): UPDATE `Exercises` SET `name`=$1,`sets`=$2,`reps`=$3,`weight`=$4,`updatedAt`=$5 WHERE `id` = $6
Executing (default): SELECT `id`, `name`, `sets`, `reps`, `weight`, `createdAt`, `updatedAt`, `WorkoutId` FROM `Exercises` AS `Exercise`;       
PS C:\Users\aj4ho\fitness-tracker-api> git add .
PS C:\Users\aj4ho\fitness-tracker-ap> git commit -m "Finalized and updated Fitness Tracker"
[main 26f5251] Finalized and updated Fitness Tracker
 3 files changed, 35 insertions(+), 10 deletions(-)
PS C:\Users\aj4ho\fitness-tracker-api> git push
To https://github.com/amollica-analytics/fitness-tracker-api.git        
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/amollica-analytics/fitness-tracker-api.git'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use    
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
PS C:\Users\aj4ho\fitness-tracker-api> git push
To https://github.com/amollica-analytics/fitness-tracker-api.git        
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/amollica-analytics/fitness-tracker-api.git'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use    
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
PS C:\Users\aj4ho\fitness-tracker-api> git add .
PS C:\Users\aj4ho\fitness-tracker-api> git commit -m 'Finalized project'

On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
PS C:\Users\aj4ho\fitness-tracker-api> git push
To https://github.com/amollica-analytics/fitness-tracker-api.git        
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/amollica-analytics/fitness-tracker-api.git'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use    
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
PS C:\Users\aj4ho\fitness-tracker-api>
