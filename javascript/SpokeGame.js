﻿function toInt(n) {
    return Math.round(n);
};




function drawArea(mainArea) {

    dim = mainArea.Dimensions;
    gameboard.fillStyle = "rgba(0, 0, 200, 0.5)";
    gameboard.fillRect(dim.x, dim.y, dim.width, dim.height);
    cardCount = 0;
    for (i = 0; i < mainArea.Spaces.length; i++) {
        space = mainArea.Spaces[i];
        cardCount += space.Cards.length;
    }


    xMultiply = dim.width / (mainArea.NumberOfCardsHorizontal == -1 ? cardCount : mainArea.NumberOfCardsHorizontal);
    yMultiply = dim.height / (mainArea.NumberOfCardsVertical == -1 ? cardCount : mainArea.NumberOfCardsVertical);

    for (i = 0; i < mainArea.Spaces.length; i++) {
        space = mainArea.Spaces[i];
        xOff = 0;
        yOff = 0;
        for (j = 0; j < space.Cards.length; j++) {
            card = space.Cards[j];

            var img = new Image();
            xx = toInt((space.X + xOff) * xMultiply + dim.x);
            yy = toInt((space.Y + yOff) * yMultiply + dim.y);
            img.onload = (function (valc, val, val2) {
                return function () {
                    gameboard.drawImage(valc, val, val2);
                };
            })(img, xx, yy);

            img.src = drawCard(card);

            xOff++;
            if (xOff > (space.Width == -1 ? space.Cards.length : space.Width)) {
                xOff = 0;
                yOff++;
            }
            if (yOff > (space.Width == -1 ? space.Cards.length : space.Height)) {
                alert('error');
            }
        }
    }
    for (i = 0; i < mainArea.TextAreas.length; i++) {
        ta = mainArea.TextAreas[i];
        gameboard.fillStyle = "rgba(200, 0, 200, 0.5)";
        gameboard.fillText(ta.Text, toInt((ta.X) * xMultiply + dim.x), toInt((ta.Y) * yMultiply + dim.y));
    }
}





function drawCard(card) {
    var src = '';
    var domain = '/assets';
    switch (card.CardName) {
        case 'AceDiamonds':
            src = domain + '/cards/101';
            break;
        case 'DeuceDiamonds':
            src = domain + '/cards/102';
            break;
        case 'ThreeDiamonds':
            src = domain + '/cards/103';
            break;
        case 'FourDiamonds':
            src = domain + '/cards/104';
            break;
        case 'FiveDiamonds':
            src = domain + '/cards/105';
            break;
        case 'SixDiamonds':
            src = domain + '/cards/106';
            break;
        case 'SevenDiamonds':
            src = domain + '/cards/107';
            break;
        case 'EightDiamonds':
            src = domain + '/cards/108';
            break;
        case 'NineDiamonds':
            src = domain + '/cards/109';
            break;
        case 'TenDiamonds':
            src = domain + '/cards/110';
            break;
        case 'JackDiamonds':
            src = domain + '/cards/111';
            break;
        case 'QueenDiamonds':
            src = domain + '/cards/112';
            break;
        case 'KingDiamonds':
            src = domain + '/cards/113';
            break;
        case 'AceClubs':
            src = domain + '/cards/114';
            break;
        case 'DeuceClubs':
            src = domain + '/cards/115';
            break;
        case 'ThreeClubs':
            src = domain + '/cards/116';
            break;
        case 'FourClubs':
            src = domain + '/cards/117';
            break;
        case 'FiveClubs':
            src = domain + '/cards/118';
            break;
        case 'SixClubs':
            src = domain + '/cards/119';
            break;
        case 'SevenClubs':
            src = domain + '/cards/120';
            break;
        case 'EightClubs':
            src = domain + '/cards/121';
            break;
        case 'NineClubs':
            src = domain + '/cards/122';
            break;
        case 'TenClubs':
            src = domain + '/cards/123';
            break;
        case 'JackClubs':
            src = domain + '/cards/124';
            break;
        case 'QueenClubs':
            src = domain + '/cards/125';
            break;
        case 'KingClubs':
            src = domain + '/cards/126';
            break;
        case 'AceHearts':
            src = domain + '/cards/127';
            break;
        case 'DeuceHearts':
            src = domain + '/cards/128';
            break;
        case 'ThreeHearts':
            src = domain + '/cards/129';
            break;
        case 'FourHearts':
            src = domain + '/cards/130';
            break;
        case 'FiveHearts':
            src = domain + '/cards/131';
            break;
        case 'SixHearts':
            src = domain + '/cards/132';
            break;
        case 'SevenHearts':
            src = domain + '/cards/133';
            break;
        case 'EightHearts':
            src = domain + '/cards/134';
            break;
        case 'NineHearts':
            src = domain + '/cards/135';
            break;
        case 'TenHearts':
            src = domain + '/cards/136';
            break;
        case 'JackHearts':
            src = domain + '/cards/137';
            break;
        case 'QueenHearts':
            src = domain + '/cards/138';
            break;
        case 'KingHearts':
            src = domain + '/cards/139';
            break;
        case 'AceSpades':
            src = domain + '/cards/140';
            break;
        case 'DeuceSpades':
            src = domain + '/cards/141';
            break;
        case 'ThreeSpades':
            src = domain + '/cards/142';
            break;
        case 'FourSpades':
            src = domain + '/cards/143';
            break;
        case 'FiveSpades':
            src = domain + '/cards/144';
            break;
        case 'SixSpades':
            src = domain + '/cards/145';
            break;
        case 'SevenSpades':
            src = domain + '/cards/146';
            break;
        case 'EightSpades':
            src = domain + '/cards/147';
            break;
        case 'NineSpades':
            src = domain + '/cards/148';
            break;
        case 'TenSpades':
            src = domain + '/cards/149';
            break;
        case 'JackSpades':
            src = domain + '/cards/150';
            break;
        case 'QueenSpades':
            src = domain + '/cards/151';
            break;
        case 'KingSpades':
            src = domain + '/cards/152';
            break;
        case 'Back':
            src = domain + '/cards/155';
            break;
    }


    return src + ".gif";
}