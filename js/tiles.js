(function(global) {
    var tiles = {
        // REBELS

        xwing: {
            name: "X-Wing",
            image: "rebel/xwing.png",
            size: [255, 302],
            offset: [128, 302],
            w: 2.5,
            h: 2.5,
            p: 0.5
        },
        ywing: {
            name: "Y-Wing",
            image: "rebel/ywing.png",
            size: [215, 276],
            offset: [110, 276],
            w: 2.5,
            h: 2.5,
            p: 0.5
        },
        awing: {
            name: "A-Wing",
            image: "rebel/awing.png",
            size: [213, 326],
            offset: [108, 326],
            w: 2.5,
            h: 2.5,
            p: 0.5
        },
        awing_ace: {
            name: "A-Wing (Ace)",
            image: "rebel/awing-ace.png",
            size: [213, 326],
            offset: [108, 326],
            w: 2.5,
            h: 2.5,
            p: 0.5
        },
        bwing: {
            name: "B-Wing",
            image: "rebel/bwing.png",
            size: [241, 326],
            offset: [141, 326],
            w: 2.5,
            h: 2.5,
            p: 0.5
        },
        bwing_ace: {
            name: "B-Wing (Ace)",
            image: "rebel/bwing-ace.png",
            size: [241, 326],
            offset: [141, 326],
            w: 2.5,
            h: 2.5,
            p: 0.5
        },
        ewing: {
            name: "E-Wing",
            image: "rebel/ewing.png",
            size: [209, 269],
            offset: [108, 269],
            w: 2.5,
            h: 2.5,
            p: 0.5
        },
        ewing_ace: {
            name: "E-Wing (Ace)",
            image: "rebel/ewing-ace.png",
            size: [210, 269],
            offset: [110, 260],
            w: 2.5,
            h: 2.5,
            p: 0.5
        },
        hwk290: {
            name: "HWK-290",
            image: "rebel/hwk290.png",
            size: [228, 290],
            offset: [114, 290],
            w: 2.5,
            h: 2.5,
            p: 0.5
        },
        z95headhunter: {
            name: "Z-95",
            image: "rebel/z95.png",
            size: [209, 268],
            offset: [104, 268],
            w: 2.5,
            h: 2.5,
            p: 0.5
        },
        yt2400freighter: {
            name: "YT-2400",
            image: "rebel/yt2400.png",
            size: [388, 379],
            offset: [194, 379],
            w: 4,
            h: 4,
            p: 1  //padding, included in height
        },
        yt1300: {
            name: "yt1300",
            image: "rebel/yt1300.png",
            size: [472, 389],
            offset: [236, 389],
            w: 4,
            h: 4,
            p: 1 //padding, included in height
        },

        // Epic Ships removed until issue with rectangular ships is fixed

        // gr75mediumtransport: {
        //     name: "Rebel Transport",
        //     image: "rebel/transport.png",
        //     size: [627, 531],
        //     offset: [234, 531],
        //     w: 8,
        //     h: 4,
        //     p: 1 //padding, included in height
        // },
        // cr90corvette: {
        //     name: "Tantive IV",
        //     image: "rebel/tantive-iv.png",
        //     size: [949, 697],
        //     offset: [356, 697],
        //     w: 11,
        //     h: 4,
        //     p: 1 //padding, included in height
        // },


        // IMPERIAL

        tiefighter: {
            name: "TIE Fighter",
            image: "imperial/tie-fighter.png",
            size: [211, 365],
            offset: [100, 365],
            w: 2.5,
            h: 2.5,
            p: 0.5
        },
        tiebomber: {
            name: "TIE Bomber",
            image: "imperial/tie-bomber.png",
            size: [211, 276],
            offset: [100, 276],
            w: 2.5,
            h: 2.5,
            p: 0.5
        },
        tieinterceptor: {
            name: "TIE Interceptor",
            image: "imperial/tie-interceptor.png",
            size: [211, 277],
            offset: [100, 277],
            w: 2.5,
            h: 2.5,
            p: 0.5
        },
        tieinterceptor_ace: {
            name: "TIE Interceptor (Ace)",
            image: "imperial/tie-interceptor-ace.png",
            size: [211, 277],
            offset: [100, 277],
            w: 2.5,
            h: 2.5,
            p: 0.5
        },
        tieinterceptor_red: {
            name: "TIE Interceptor (Jax)",
            image: "imperial/tie-interceptor-red.png",
            size: [211, 277],
            offset: [100, 277],
            w: 2.5,
            h: 2.5,
            p: 0.5
        },
        tieadvanced: {
            name: "TIE Advanced",
            image: "imperial/tie-advanced.png",
            size: [209, 294],
            offset: [105, 294],
            w: 2.5,
            h: 2.5,
            p: 0.5
        },
        tieadvanced_new: {
            name: "TIE Advanced (New)",
            image: "imperial/tie-advanced-repaint.png",
            size: [210, 327],
            offset: [102, 327],
            w: 2.5,
            h: 2.5,
            p: 0.5
        },
        tiedefender: {
            name: "TIE Defender",
            image: "imperial/tie-defender.png",
            size: [219, 368],
            offset: [102, 368],
            w: 2.5,
            h: 2.5,
            p: 0.5
        },
        tiephantom: {
            name: "TIE Phantom",
            image: "imperial/tie-phantom.png",
            size: [216, 315],
            offset: [102, 315],
            w: 2.5,
            h: 2.5,
            p: 0.5
        },
        firespray31: {
            name: "Slave 1",
            image: "imperial/slave-1.png",
            size: [384, 435],
            offset: [192, 435],
            w: 4,
            h: 4,
            p: 1
        },
        lambdaclassshuttle: {
            name: "Lambda Shuttle",
            image: "imperial/lambda-shuttle.png",
            size: [407, 467],
            offset: [192, 467],
            w: 4,
            h: 4,
            p: 1
        },
        vt49decimator: {
            name: "Decimator",
            image: "imperial/decimator.png",
            size: [475, 398],
            offset: [290, 398],
            w: 4,
            h: 4,
            p: 1
        },

        // Epic Ships removed until issue with rectangular ships is fixed
        // raider: {
        //     name: "Raider",
        //     image: "imperial/raider.png",
        //     size: [756, 617],
        //     offset: [290, 398], //@todo
        //     w: 8, //@todo
        //     h: 4, //@todo
        //     p: 1
        // },

        // SCUM
        aggressor: {
            image: "scum/ig-2000.png",
            size: [382, 361],
            offset: [192, 361],
            w: 4,
            h: 4,
            p: 1
        },
        m3ainterceptor: {
            image: "scum/m3a-scyk.png",
            size: [210, 249],
            offset: [105, 249],
            w: 2.5,
            h: 2.5,
            p: 0.5
        },
        starviper: {
            image: "scum/starviper.png",
            size: [210, 405],
            offset: [105, 405],
            w: 2.5,
            h: 2.5,
            p: 0.5
        },
        firespray31_scum: {
            name: "Slave 1",
            image: "scum/slave-1.png",
            size: [384, 435],
            offset: [192, 435],
            w: 4,
            h: 4,
            p: 1
        },
        hwk290_scum: {
            image: "scum/hwk290.png",
            size: [228, 290],
            offset: [114, 290],
            w: 2.5,
            h: 2.5,
            p: 0.5
        },
        ywing_scum: {
            image: "scum/ywing.png",
            size: [215, 276],
            offset: [110, 276],
            w: 2.5,
            h: 2.5,
            p: 0.5
        },
        z95headhunter_scum: {
            image: "scum/z95.png",
            size: [209, 268],
            offset: [104, 268],
            w: 2.5,
            h: 2.5,
            p: 0.5
        }

    };

    global.xwingapp = global.xwingapp || {};
    global.xwingapp.tiles = tiles;
})(window);