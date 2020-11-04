
# Evaluate text with Azure Cognitive Language Services

## Azure Content Moderator

### **Intro**
Azure Content Moderator to usługa, która pozwala użyć maszyny, aby wspomóc moderowanie tekstu, zdjęć czy wideo do rozpoznawania rzeczy, których chcielibyśmy nie pokazywać innym użytkownikom.

Serwis analizuje np. tekst i zwraca informację czy znajdują się słowa, które pasują do jednej z trzech kategorii:
* słowa które mogą być uważane za otwarcie seksualne lub wulgarne w konkretnych sytuacjach
* słowa które mogą być uważane za sugestywnie seksualne lub wulgarne w konkretnych sytuacjach
* słowa które mogą być uważane za obraźliwe w konkretnych sytuacjach

Usługa zwraca JSON z informacją o słowach które zostały wykryte, liczbami zmiennoprzecinkowymi o wartości od 0 do 1 i informacją czy sugerowana jest moderacja.

Usługa chroni też użytkowników przed udostępnianiem potencjalnie prywanych informacji jak adrese email, telefonu, IP czy domowe.

### **Use cases**
Ta usługa może zostać wykorzystana w miejscach, gdzie użytkownicy tworzą tekst lub inną treść np:
* Czaty w grach, czaty na grupach dyskusyjnych, forach.
* Komentarze do treści dodanych przez innych użytkownikóœ.
* Recenzje do zakupionych produktów lub pisane recenzje książek, filmów, gier itp. 
* Dokumenty do których dostęp ma cały zespół w pracy.
* Wpisy na portalach społecznościowych, gdzie mogą być dodawane zdjęcia lub filmy.

### **How to**
Usługę mozna utworzyć w *Azure portal*, a następnie przetestować posługując się *Subscription Key*. 

Usługa zapewnia 5000 darmowych moderacji i przeglądów miesięcznie, z limitem jednej transakcji na sekundę.

Powyżej tego limitu usługa ma cenę od 0.338€ za 1000 transakcji przy ponad 10 mln transakcji miesięcznie do 0.844€ za 1000 transakcji przy 0 do 1 mln transakcji miesięcznie. Cena dotyczny regionu EU West.

## Language Understanding Intelligent Service (LUIS)

### **Intro**
LUIS jest usługą, która pozwala wydobywać znaczenie i ważne informacje z tekstu podanego przez użytkownika, a potem wykorzystanie tej wiedzy na interakcję z użytkownikiem. 

Usługa rozróżnia trzy główne elementy tekstu:
* Wypowiedzi, czyli tekst podany przez użytkownika
* Intecje, czyli co użytkownik chce zrobić
* Podmioty, czyli poszczególne słowa, frazy czy liczby które są w wypowidzi użytkownika

### **Use cases**
Przykładami użycia tego serwisu mogą być np.
* Automatyczny czat z klientem, który chce zamówić usługę, pozwala to np. na początkowe sprawdzenie czy klient jest zainteresowany ofertą, a kontakt specjalisty nie jest jeszcze wymagany, np. przy budowie domu można sprawdzić, czy użytkownik planuje budowę budynku o takim profilu jaki ma firma.
* Aplikacja mailowa czy smsowa, która analizując emaile czy wiadomosci pyta się, czy dodać przypomnienie na konkretny termin. Takie rozwiązanie ma gmail przy biletach lotniczych czy bookowanych hotelach. I od razu można pokazać użytkownikowi odpowiednią reklamę. Ktoś leci do Rzymu w czerwcu? W nowych Ray-Banach będzie wyglądać cudownie.

### **How to**
Usługę mozna utworzyć w *Azure portal*. Następnie należy stworzyć aplikację w konkretnej lokacji i wybrać konkretną kulturę.

W aplikacji trzeba stworzyć intencje i podmioty, np. powitanie użytkownika, dodanie zdjęcia czy zapisanie zadania w kalendarzu. Stworzony model należy wytrenować/przetestować i jeśli model będzie działał wystarczająco dobrze, to można opublikować aplikację.

Usługa zapewnia 10000 darmowych żądań tekstowych i 1 mln tworzeń transakcji miesięcznie, z limitem 5 transakcji na sekundę. Żądania z rozponawaniem mowy są płatne.

Powyżej tego limitu usługa ma cenę od 1,265€ za 1000 żądań tekstowych. Koszt 1000 żądań z rozpoznawaniem mowy wynosi 4,639€. Cena dotyczny regionu EU West.

## Text Analytics API

### **Intro**
Text Analytics pozwala na wykrycie emocji w tekscie, rozpoznanie języka tekstu, czy określenie czy tekst ma charakter pozytywny czy negatywny na podstawie użytych zdań, nawet jeśli pojedyncze zdanie jest neutralne.

W przypadku wykrywania nacechowania tekstu i zwraca wartość od 0 do 1, gdzie 1 to maksymalnie pozytywne nacechowanie a 0 to maksymalnie negatywne. 

### **Use cases**
* Tworząc portal społecznościowy i cechując się zyskami można użyć takiej usługi, aby po dodaniu postów, zdjęć lub innych reakcji powiadamiać użytkownika tylko o tych komentarzach, które mają skrajne nacechowanie, dzięki temu użytkownik będzie spędzał więcej czasu - albo dostając pozytywny feedback i upewniając się, że ma rację / jest super albo mając osobę z całkowicie inną opinią, z którą będzie mógł się kłucić. W międzyczasie można mu pokazać odpowiednie reklamy.
* Można użyć tego do automatycznego sprawdzania czy recenzja produktu jest pozytywna czy negatywna i w zależności od tego ile zapłacił producent można akceptować tylko te pozytywne, a przy negatywnych zwracać jakiś dziwny błąd ze statusem 500.

### **How to**
Usługę mozna utworzyć w *Azure portal*. Następnie usługę można przetestować ją z poziomu konsoli lub użyć interfejsu API w aplikacji wykonując żądania POST.

Cena usługi jest mocno uzależniona od wybranej instancji, na standardowych poziomach usługa zapewnia 5000 darmowych żądań miesięcznie.

Powyżej tego limitu usługa ma cenę od 1,687€ do 0,211€ za 1000 żądań tekstowych. Cena dotyczny regionu EU West.