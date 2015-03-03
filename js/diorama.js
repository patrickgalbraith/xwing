(function(global, $) {
    var $stage = null;
    var ships = [];
    var cell   = {
        w: 128,
        h: 64
    };

    var Diorama = function($stage, ships) {
        this.$stage = $stage;
        this.ships = ships;
    };

    Diorama.prototype.create = function(drawnShipIndexes) {
        this.$stage.empty();

        return this.drawMap(this.generateMap(drawnShipIndexes));
    };

    Diorama.prototype.generateMap = function(drawnShipIndexes) {
        var self       = this,
            map        = [],
            drawnShips = [],
            packer     = new GrowingPacker();

        // Pick ships from dataset by supplied indexes
        drawnShipIndexes.forEach(function(shipId) {
            drawnShips.push(jQuery.extend(true, {}, self.ships[shipId])); // Add clone of ship to array
        });

        // Sort by width
        drawnShips.sort(function(a, b) { return (b.w > a.w); });

        packer.fit(drawnShips);

        return drawnShips;
    };

    Diorama.prototype.drawMap = function(map) {
        var self = this,
            min  = [9999999,9999999],
            max  = [0,0];

        var shipDivs = [];

        map.forEach(function(ship) {
            var pos = ship.fit;

            if(!pos) {
                console.log('Ship does not fit', ship);
                return;
            }

            var $div = $('<div>').addClass('ship'),
                $img = $('<img>');

            $img.attr('src', 'img/ships/'+ship.image);
            $div.append($img);

            var top  = 0,
                left = 0;

            ship.p = ship.p || 0;

            left =  ((pos.x - pos.y) * (cell.w/2)) - ship.offset[0];
            top = ((pos.x + pos.y) * (cell.h/2)) - (ship.offset[1] - ((ship.h - ship.p) * cell.h));

            // Update min, max
            if(left < min[0])
                min[0] = left;

            if(top < min[1])
                min[1] = top;

            if(left + ship.offset[0] > max[0])
                max[0] = left + ship.size[0]; // Note: ship.offset[0] is not same as image width

            if(top + ship.offset[1] > max[1])
                max[1] = top + ship.size[1];

            // Add to list
            shipDivs.push({
                $el: $div,
                top: top,
                left: left
            });
        });

        // Now we have min positions we can place the ships correctly
        shipDivs.forEach(function(ship) {
            ship.$el.css('top', ship.top - min[1])
                    .css('left', ship.left - min[0]);

            self.$stage.append(ship.$el);
        });

        self.$stage.width(max[0] - min[0]);
        self.$stage.height(max[1] - min[1]);
    };

    global.xwingapp = global.xwingapp || {};
    global.xwingapp.Diorama = Diorama;
})(window, jQuery);