# Create Intelligent Bots with the Azure Bot Service

## QnA Maker

### **Intro**
QnA Maker to usługa, która pozwala tworzyć i publikować bazy wiedzy z wbudowanymi funkcjami przetwarzania języka naturalnego.

Bazy wiedzy zawierają pytania i odpowiedzi, które potem mogą być wykorzystane przez Azure Bot Service.

### **Use cases**
* Czatboty
* Przerwarzanie akcji w systemach
* Inteligentny dom / urządzenia typu Alexa

### **How to**
Na początku należy zrobić bazę wiedzy w _QnA Maker portal_. Baza wiedzy będzie zawierać pytania i odpowiedzi. Pytania mogą być wygenerowane z istniejącego FAQ na stronie, zaimportowane z predefiniowanego źródła lub wprowadzone ręcznie, można także użyć różnych źródeł.

Po dodaniu pytań i odpowiedzi baza wiedzy musi zostać sprawdzona, przetestowana i w końcu opublikowana.

Można wykonać maksymalnie 3 transakcje na sekundę i do 100 transakcji na minutę. Wersja darmowa ma dodatkowe ograniczenia 50 000 transakcji na miesiąc i dokumenty o rozmiarze maksymalnie 1MB.

Za darmo mogą być zarządzane 3 dokumenty. Wersja płatna 8,433€ miesięcznie pozwala na nieograniczoną liczbę dokumentów. Cena dotyczy regionu EU West.

## Azure Bot Service

### **Intro**
Azure Bot Service umożliwia tworzenie, publikowanie i zarządzanie botami.

Framework zapewnia integrację z wieloma usługami bez dodatkowej konfiguracji, ale możliwa jest też integracja z własnym rozwiązaniem.


### **Use cases**
Usługa pozwala na skorzystanie z bota w aplikacjach typu Microsoft Teams, Skype, Slack czy Facebook Messenger. Tego typu konfiguracja jest bardzo prosta i pozwala np, na stworzenie bota do obsługi Facebooka odpowiadając na pytania, aby odciążyć ludzi odpowiadając na często zadawane pytania.

Usługa pozwala też stworzyć własne kanały komunikaci, więc możliwa też jest integracja z własną aplikacją.

### **How to**
Usługę mozna utworzyć w *Azure portal*. Potrzebna jest też baza wiedzy, którą można stworzyć w QnA Maker.

Po skonfigurowaniu i przetestowaniu bota można podłączyć do niego wiele kanałów komunikacji, np. email, Teamsy czy czat w aplikacji.

Azure zapewnia dwa typy kanałów.
* Standardowe - które obejmują usługi Microsoftu (Skype, Cortana, Teams) oraz usługi z publicznie dostępnymi interfejsami API botów (takie jak Facebook i Slack). Za darmo dostępna jest nieograniczona liczba komunikatów.
* Premium - które umożliwiają botowi niezawodne komunikowanie się z użytkownikami w ramach aplikacji lub witryny własnej klienta. Za darmo dostępne jest 10 000 komunikatów miesięcznie. Powyżej tej liczby koszt wyniosi 0,442€ za 1000 komunikatów.

Cena dotyczy regionu EU West.

## Bot Framework Composer

### **Intro**
Bot Framework Composer jest aplikacją instalowaną w systmie użytkownika. Jest to otwartoźródłowe narzędzie, które pozwala na szybkie stworzenie chatbota za pomocą wizualnego edytora.

Usługa pozwala także na integrację z LUIS, stworzenie wyzwalaczy i opublikowanie modelu bezpośrednio w aplikacji

### **Use cases**
Aplikacja ułatwia tworzenie botów dając do dyspozycji interfejs pozwalający stworzyć bota bez konieczności grzebania w kodzie. Dodatkowa integracja z usługami Microsoftu, a przede wszystkm z LUIS pozwala tworzyć wszystko to co wcześniej można było zrobić w LUIS.

### **How to**
Composer do działania wymaga zainstalowanego .NET Core SDK 3.1 i Bot Framework Emulator. Te narzędzia jak i Composer można za darmo pobrać ze strony Microsoftu lub Githuba.