var app = angular.module("adventureApp", []);

app.controller("AdventureController", [
    "$scope",
    function($scope) {
        // Define the scenes
        $scope.scenes = [{
                id: 1,
                story: "You are Super Sparkle, the bravest superhero! A kitty is stuck in a tree. What will you do?",
                options: [{
                        text: "Climb the tree to save the kitty.",
                        nextScene: 2,
                        color: "#00FF00", // Green
                        arrow: "➔",
                    },
                    {
                        text: "Call for help.",
                        nextScene: 3,
                        color: "#FFFF00", // Yellow
                        arrow: "➔",
                    },
                    {
                        text: "Fly over the river to find another adventure.",
                        nextScene: 4,
                        color: "#0000FF", // Blue
                        arrow: "➔",
                    },
                ],
            },
            {
                id: 2,
                story: "You climb the tree, but oh no, it's very tall! A branch breaks! What do you do?",
                options: [{
                        text: "Use your super strength to hold on.",
                        nextScene: 5,
                        color: "#FF0000", // Red
                        arrow: "➔",
                    },
                    {
                        text: "Jump safely to the ground.",
                        nextScene: 6,
                        color: "#FFFF00", // Yellow
                        arrow: "➔",
                    },
                    {
                        text: "Ask the kitty to jump into your arms.",
                        nextScene: 5,
                        color: "#00FF00", // Green
                        arrow: "➔",
                    },
                ],
            },
            {
                id: 3,
                story: "Help arrives! Together you rescue the kitty. The kitty thanks you with a magical gift!",
                options: [{
                    text: "Accept the gift and continue your adventure.",
                    nextScene: 4,
                    color: "#00FF00", // Green
                    arrow: "➔",
                }, ],
            },
            {
                id: 4,
                story: "You fly over the river and see a boat in trouble. The waves are big! What do you do?",
                options: [{
                        text: "Calm the waves with your powers.",
                        nextScene: 5,
                        color: "#0000FF", // Blue
                        arrow: "➔",
                    },
                    {
                        text: "Lift the boat to safety.",
                        nextScene: 6,
                        color: "#FFFF00", // Yellow
                        arrow: "➔",
                    },
                    {
                        text: "Call a giant friendly fish to help.",
                        nextScene: 5,
                        color: "#00FF00", // Green
                        arrow: "➔",
                    },
                ],
            },
            {
                id: 5,
                story: "Oh no! A challenge appears! But with courage, you overcome it and save the day!",
                options: [{
                    text: "Celebrate your victory!",
                    nextScene: 6,
                    color: "#FFFF00", // Yellow
                    arrow: "➔",
                }, ],
            },
            {
                id: 6,
                story: "You return home safely after a day of adventures. Great job, Super Sparkle!",
                options: [{
                    text: "Play again.",
                    nextScene: 1,
                    color: "#00FF00", // Green
                    arrow: "➔",
                }, ],
            },
        ];

        // Initialize the current scene
        $scope.currentScene = $scope.scenes[0];

        // Function to handle option selection
        $scope.chooseOption = function(option) {
            var nextScene = $scope.scenes.find(function(scene) {
                return scene.id === option.nextScene;
            });
            $scope.currentScene = nextScene;
            // Speak the scene text
            $scope.speakText($scope.currentScene.story);
        };

        // Function to speak text
        $scope.speakText = function(text) {
            if ("speechSynthesis" in window) {
                var utterance = new SpeechSynthesisUtterance(text);
                window.speechSynthesis.speak(utterance);
            }
        };

        // Speak the initial scene
        $scope.speakText($scope.currentScene.story);
    },
]);