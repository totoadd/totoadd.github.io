$.getJSON("https://totoadd.github.io/info-bot.json", function(data) {
    $("#status").addClass(`bg-${data.status.bg}`);
    $("#status1").html(`${data.status.state}`);
    $("#status2").html(`Dernier bug: ${data.status.bug}`);
    $("#status3").html(`Mis à jour le ${data.status.date}`);

    $("#log1").html(`${data.log.change}`);
    $("#log2").html(`Mis à jour le ${data.log.date}`);
});