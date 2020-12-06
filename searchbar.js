function search() {
  var sec1 = "There are many ways in which modern Japanese music like J-Pop or J-Rock are influenced by western music. Critically, it was prior to the WWII that western music started to take its toll on the music of Japan. The shift in popularity left traditional Japanese music to its renounce by the young Japanese people while earning the modern westernized ones it’s number one title in Japan. After the second world war, Japan’s entertainment industry collapsed, but was quickly dominated by the pop culture. This process took shape beyond music, but is the start of Japanese influenced style of music.";

  var sec2 = "Alongside the start of “parallel music culture”, there are also generalization in the lyrics of songs. Specifically, the use of language in modern Japanese music. Nowadays, a good portion of modern Japanese music are written in two languages – English and Japanese. As such, although one could always enjoy a piece of music without knowing the lyrics, one must be a bilingual in order to truly acknowledge what is being sang when listening.";

  var sec3 = "Westernization in music can take shape in many ways. As the music drift form, the instrumentation adapts as well. Explicitly, and especially among the Japanese musicians, there is an increase in the trend of adopting instrument from the western world ever since 1870s, after the introduction of the so-called “parallel music cultures” in Japan. The change in the musical culture by the 1920s led to the birth of modern Japanese-western music, new genres of Japanese music that contains a mixture of either qualities.";

  var sec4 = "In conclusion, western influences in modern Japanese music cannot be understated. It has taken shape in many different forms, ranging from the use of language to dance moves. Although traditional Japanese music remains alive to this day, there is a dramatic change in the art of their music. Especially since _ the value and expectation from modern Japanese music among the younger audience has changed.";

  var sec5 = "In conclusion, western influences in modern Japanese music cannot be understated. It has taken shape in many different forms, ranging from the use of language to dance moves. Although traditional Japanese music remains alive to this day, there is a dramatic change in the art of their music. Especially since _ the value and expectation from modern Japanese music among the younger audience has changed.";

  var search = document.getElementById('searchvalue').value;

  if (search == "") {
    alert("Could not search blank spaces!")
  } else if (search = " ") {
    alert("Could not search blank spaces!")
  } else if (sec1.includes(search) == true) {
    alert("Text found in section 1!")
  } else if (sec2.includes(search) == true){
    alert("Text found in section 2!")
  } else if (sec3.includes(search) == true) {
    alert("Text found in section 3!")
  } else if (sec4.includes(search) == true) {
    alert("Text found in section 4!")
  } else if (sec5.includes(search) == true) {
    alert("Text found in section 5!")
  } else {
    alert("Could not find text!")
  }
}
