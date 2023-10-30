function calc() {
  var im = parseInt(document.getElementById("im").value);
  var cl = parseInt(document.getElementById("cl").value);
  var co = parseInt(document.getElementById("co").value);
  var sp = parseInt(document.getElementById("sp").value);

  var ctr = (document.getElementById("ctr").value = (cl / im) * 100);
  var cr = (document.getElementById("cr").value = (co / cl) * 100);
  var cpc = (document.getElementById("cpc").value = (sp / cl) * 100);
  var cps = (document.getElementById("cps").value = (sp / co) * 100);
}
