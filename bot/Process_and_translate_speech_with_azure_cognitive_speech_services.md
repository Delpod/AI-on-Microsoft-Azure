# Process and Translate Speech with Azure Cognitive Speech Services

## Speech Services

### **Intro**
Speech Services pozwala na transkrypcję strumienia audio na tekst lub na zamianę tekstu na mowę. Usługa pozwala też na tłumaczenie mowy oraz weryfikację i identyfikację mówiących osób. Usługi mowy mogą być użyte zarówno za pomocą SDK jak i RESTowego API.

Usługa zamiany tekstu na mowę pozwala na użycie 75 różnych głosów w 45 różnych językach. Neuronowa zamiana tekstu na mowę pozwala dodatkowo polepszyć działanie standardowych głosów poprzez dodanie odpowiedniej intonacji do tekstu.

### **Use cases**
Usługa może być wykorzystana w miejscach gdzie możliwa jest interakcja z mówiącym użytkownikiem
* Aplikacje nawigacji samochodowej, gdzie użytkownik nie powinien klikać w ekran telefonu
* Aplikacje umożliwiające używanie ich ludziom niewidomym i niedowidomym
* Do obsługi ludzi w szpitalach lub z opieką np. osób z połamanymi kończynami lub sparaliżowanych, aby umożliwić łatwiejszy kontakt z osobą opiekującą, bądź z robotem opiekującym
* Inteligenty dom - jak Alexa czy Cortana
* Automatyczne tworzenie napisów do filmów (jak na YouTube)
* Asystenci - wyszukiwarki, boty itp.
* Przy zabezpieczeniach, rozpoznając osobę mówiącą
* W podsłuchach lub reklamie kontekstowej - identyfikacja rozmówców
* Narzędzia lub aplikacje do tłumaczenia mowy / rozmowy między dwoma osobami

### **How to**
Usługę mozna utworzyć w _Azure portal_, wyszukując "speech", a następnie wybierając pozycję "Speech" z Marketu następnie przetestować posługując się _Subscription Key_. 

Usługa przy standardowych funkcjach zapewnia 5 milionów znaków zamiany tekstu na mowę i 5 godzin darmowej zamiany mowy na tekst i 5 godzin tłumaczenia mowy. Pozwala też na 10 000 weryfikacji i 10 000 identyfikacji osoby mówiącej.

Powyżej tego limitu usługa ma cenę od 0.884€ za godzinę transkrypcji ze strumienia audio, 3.374€ za mln znaków przetworzonych na mowę i 2.11€ za godzinę tłumaczenia oraz odpowiednio 4.217€ i 8.433€ za weryfikację i idendyfikację rozmówcy. Cena dotyczy regionu EU West.
