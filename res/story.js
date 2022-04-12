export const textNodes = [
  {
    id: 1,
    text: "While returning back to home from work. You've come across a bag of gold lying on the road.",
    options: [
      {
        text: "Take the bag of gold",
        setState: { gold: true },
        nextText: 2,
      },
      {
        text: "Ignore it",
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text: "You move ahead. You've come across a merchant. Do you wish to buy something?",
    options: [
      {
        text: "Use gold to buy sword",
        requiredState: (currentState) => currentState.gold,
        setState: { gold: false, sword: true },
        nextText: 3,
      },
      {
        text: "Buy nothing.",
        nextText: 3,
      },
    ],
  },
  {
    id: 3,
    text: "You've returned back to home. Surprise! You're home has been infiltrated by an armed robber(knife). He threatens you to silently leave or get killed.",
    options: [
      {
        text: "Run away.",
        nextText: 4,
      },
      {
        text: "offer the gold and ask him to leave",
        requiredState: (currentState) => currentState.gold,
        setState: { gold: false },
        nextText: 5,
      },
      {
        text: "Use the sword to defeat him",
        requiredState: (currentState) => currentState.sword,
        nextText: 6,
      },
      {
        text: "Call for help.",
        nextText: 7,
      },
    ],
  },
  {
    id: 4,
    text: "You're homeless now. Where do you take shelter?",
    options: [
      {
        text: "in the streets",
        nextText: 8,
      },
      {
        text: "Go to an inn. Use gold.",
        requiredState: (currentState) => currentState.gold,
        setState: { gold: false },
        nextText: 9,
      },
    ],
  },
  {
    id: 5,
    text: "The robber snatched the gold from you. Additonally, he tells you that it was his which he lost it on the way. He looks anxious and wants you gone. It was a bad move.",
    options: [
      {
        text: "Run away",
        nextText: 4,
      },
      {
        text: "Fight and try to take back your gold.",
        nextText: 10,
      },
      {
        text: "Call for help.",
        nextText: 7,
      },
    ],
  },
  {
    id: 6,
    text: "You've somehow managed to defeat the robber. The tussle created alerted your neighbour. They called the gaurds while you kept the robber busy. The gaurds arrested the robber. You've become a hero.",
    options: [
      {
        text: "Victory. Game Completed.",
        nextText: 11,
      },
    ],
  },
  {
    id: 7,
    text: "Your shouting alerted your neighbours. They called the gaurds but your actions angered the robber and he stabbed you and escaped.",
    options: [
      {
        text: "You died. Game Over.",
        nextText: 12,
      },
    ],
  },
  {
    id: 8,
    text: "Bad move, it's winter right now. It snowed at night and you died due to frostbite.",
    options: [
      {
        text: "You died. Game Over.",
        nextText: 12,
      },
    ],
  },
  {
    id: 9,
    text: "You wake up next moring to find out that the innkeeper has called the gaurds on you. Apparently, the gold bag you had belonged to the innkeeper which was stolen yesterday. You've been arrested for robbery and sent to jail.",
    options: [
      {
        text: "You rot in jail. Game Over.",
        nextText: 12,
      },
    ],
  },
  {
    id: 10,
    text: "Bad move, you're unarmed. The robber gets angry and stabs you. Your cries alerted your neighbours and they called the gaurds. The robber escaped and you died.",
    options: [
      {
        text: "You died. Game Over.",
        nextText: 12,
      },
    ],
  },
];
