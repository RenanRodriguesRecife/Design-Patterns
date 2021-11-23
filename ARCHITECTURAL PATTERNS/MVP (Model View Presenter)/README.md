MVP (Model View Presenter)

O MVP e o MVVM são tidos como evoluções do MVC.

No MVC ainda existe acoplamento entre a VIEW e o Controller

No MVP 
consiste
em:
VIEW - PRESENTER - MODEL

No caso o PRESENTER só vai ter regras de negócio (será totalmente puro sem referências da view ou do model)
A comunicação com o preseter é feito por meio de interfaces

A view tem um objeto da interface do preseter e o presenter vai ter um objeto da interface da view (nenhum dos dois vai se comunicar diretamente apenas por meio de interface)