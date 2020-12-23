# Laboratorium Custom Vision

## Część teoretyczna

[Face API](Face_API.md)

[Computer Vision API](Computer_Vision_API.md)

[Custom Vision](Custom_Vision.md)

[Video Indexer](Video_Indexer.md)

## Część praktyczna

### Aplikacja
Gotową aplikację można znaleźć tutaj: https://recipefinderdl.azurewebsites.net/

### Use case

W przypadku braku pomysłu na obiad trzeba sięgnąć po przepisy. Jednakże pojawia się problem, w lodówce jest trochę rzeczy, ale co można z tego zrobić? Jednym możliwym rozwiązaniem będzie szukanie przepisów które zawierają posiadane rzeczy.

Jednakże łatwiejsze jest po prostu zrobienie zdjęcia tego co mamy i otrzymanie przepisów.

### Architektura
Architektura aplikacji jest dość prosta, składa się tylko z aplikacji webowej, która łączy sie z Prediction API z Custom Vision i po otrzymaniu odpowiedzi używa tego, aby otrzymać wyniki i zrobić kolejne zapytanie, tym razem do TheMealDB.

![Architektura](architecture.png)

### Budowa rozwiązania

1. Budowę aplikacji zacząłem od stworzenia odpowiedniego modelu w Custom Vision. Do tego celu wyszukałem kilkaset zdjęć różnych produktów. Projekt Custom Vision został oparty o typ detekcji obrazów, jako domena zostało wybrane "General" ze względu na to, że typ "Food" nie jest dostępny dla detekcji obrazów. Początkowo chciałem też pokazywać dokładnie jakie rzeczy zostały rozpoznane, jednak po przetestowaniu modelu na w portalu Custom Vision, uznałem, że nie jest to wymagane.
2. Po wyszukaniu i wgraniu zdjęć wszystkie zdjęcia i rzeczy na zdjęciach zostały stosowanie otagowane.
3. Model został nauczony, najpierw uczeniem przez godzinę, jednak nie dało to wystarczających efektów, a potem uczeniem szybkim, które wg testów sprawuje się lepiej.
4. Znalazłem API, które pozwala na wyszukiwanie przepisów na podstawie składników - TheMealDB.
5. Stworzona została aplikacja w Angularze, która wykorzystuje Prediction API z Custom Vision i łączy je z TheMealDB.

### Kod 

Aplikacja została napisana w Angularze i kod znajduje się w katalogu [custom-vision-app](custom-vision-app).