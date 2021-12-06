# WiSe_21_22_Webdesign

### Aufgabe "Formular":
Schreiben Sie ein Formular, in dem sich ein Kunde einen Vertrag bei einer Krankenversicherung abschließen kann bzw. zumindest die ersten dazu notwendigen Angaben machen kann.  
Folgende Eingabefelder sind nötig:
  - Geschlecht (m/w/d)
  - Name
  - Vorname
  - Geburtsdatum
  - Anzahl Kinder Falls die Anzahl Kinder nicht 0 ist, erscheinen für jedes Kind drei weitere Felder: Vorname (Zuerst gilt der Nachname des Antragstellers: deswegen zuerst ohne Nachnamen), Geschlecht und Geburtsdatum. Die Anzahl der Kinder ist nicht begrenzt!
  - Adresszusatz (optionales Feld)
  - Straße
  - Hausnummer
  - Postleitzahl
  - Ort
  - e-mail

Ergänzen Sie eine Schaltfläche Angaben prüfen. Dabei wird geprüft, ob alle Felder gefüllt sind (mit Ausnahme der optionalen). Die Felder, die fehlerhaft sind, werden rot umrandet. Insesondere:
  - Geburtsdatum muss gültig sein und Alter über 18 Jahre.
  - Die Namen sollen nicht zu lang und nicht zu kurz sein.
  - Kinder dürfen nicht doppelt eingetragen werden.

Am wichtigsten sind die folgenden Punkte:
  - Validierung der Daten
  - Dynamische Zusatzfelder. In diesem Fall sind es die Kinder aber es können die Vorerkrankungen sein, die man angeben muss und vieles vieles mehr. Es ist in vielen Formularen Standard-Funktionalität.

Die optische Gestaltung hat (zuerst) nicht die höchste Priorität. Nach Möglichkeit soll das Formular jedoch leicht zu lesen sein, ein harmonisches Aussehen haben, (und zwar auf Bildschirmen unterschiedlicher größen bis hin zu Smartphone). Das Formular soll per Tastatur ohne Mouse bedienbar sein. Die Angaben im Feld e-mail könnten in monospace-Schrift erfolgen.
