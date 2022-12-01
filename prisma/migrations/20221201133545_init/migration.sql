-- CreateTable
CREATE TABLE "Member" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nickname" TEXT NOT NULL,
    "guid" TEXT NOT NULL,
    "puid" TEXT NOT NULL,
    "udid" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "slotItem1" INTEGER NOT NULL,
    "slotItem2" INTEGER NOT NULL,
    "slotItem3" INTEGER NOT NULL,
    "slotItem4" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "PlayData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pattern_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 0,
    "grade" TEXT NOT NULL DEFAULT 'F',
    "isAllCombo" TEXT NOT NULL DEFAULT 'N',
    "isPerfectPlay" TEXT NOT NULL DEFAULT 'N',
    "judgement" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "PlayData_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Member" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
