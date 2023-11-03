export function ShowDescSnippets(t) {
  return t
  .card("desc")
  .get("desc")
  .then(function (description) {
    var text = description.substring(0, 17);
    if (description.length > 0) {
      if (description.length > 17) {
        text += "...";
      }
      return [
        {
          text: text,
          color: "light-gray",
        },
      ];
    }
  });
}
