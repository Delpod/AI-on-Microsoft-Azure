# Custom Vision

## **Intro**
Custom Vision służy do tworzenia klasyfikatorów lub detekcji obrazów. W trakcie tworzenia określa się domenę klasyfikatora, aby zoptymalizować działanie dla określonego typu, jeśli nie zakładana domena nie jest dostępna można też użyć ogólnej domeny.

Po stworzeniu klasyfikatora można go używać za pomocą REST API.

## **Use cases**
Klasyfikatory i rozpoznawanie obrazów może mieć bardzo dużo zastosowań. Przykładowe zastosowania
* Rozpoznawanie gatunku rośliny
* Rozpoznawanie zwierząt
* Sprawdzanie czy ktoś pali w miejscu dla niepalących
* Sprawdzanie czy osoba wchodząca do sklepu ma maskę na twarzy
* Zastosowania medyczne - znajdowanie chorób
* Automatyczny ochroniarz, który rozpoznaje czy w sklepie ktoś nie kradnie rzeczy lub czy sprzedawca nie został zaatakowany

## **How to**
_Custom Vision_ jest częścią _Cognitive Services_ w _Azure portal_. Najpierw należy stworzyć klasyfikator, wgrać odpowiednie obrazy oraz je otagować. Następnie należy wytrenować model. Wtedy będzie można go używać za pomocą żądań do REST API. Wszystko to można zrobić albo za pomocą portalu Custom Vision, albo za pomocą dostępnych API.

Z usługi można korzystać za darmo, jednak ograniczenia to maksymalnie dwa projekty z maksymalnie 5000 zdjęć do trenowania na projekt, jedna godzina trenowania miesięcznie, oraz 2 transakcje typu wgrywanie zdjęcia, trening czy predykcja na sekundę. Ograniczeniem jest też maksymalnie 10 000 predykcji na miesiąc.

Po przekroczeniu tego limitu koszta to 1.687€ za 1000 transakcji typu wgranie zdjęcia, trening i predykcja, 16.866€ za godzinę trenowania oraz 0.591€ za przechowywanie 1000 zdjęć.
