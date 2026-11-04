const productos = [
    {
    id: 1,
    nombre: "Inception (Blu-Ray 4K)",
    imagen: "https://spoilertown.com/wp-content/uploads/2024/06/inception-2010.webp",
    categoria: "Ciencia ficción",
    precio: 15000,
    sinapsis: "¿Es posible robar una idea directamente de la mente de alguien? Sumérgete en un laberinto de sueños donde la realidad pende de un hilo.",
    descripción: "A un ladrón que roba secretos corporativos a través de la tecnología de entrar en el subconsciente, se le da la tarea de implantar una idea en la mente del jefe de una gran empresa.",
    stock: 4,
    },

    {
    id: 2,
    nombre: "Interstellar (Edición Especial)",
    imagen: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/aa5b9295-8f9c-44f5-809b-3f2b84badfbf/74a67d78-7c7e-47e8-9603-20fe2a00eae4?host=wbd-images.prod-vod.h264.io&partner=beamcom",
    categoria: "Ciencia ficción",
    precio: 18000,
    sinapsis: "Con la Tierra al borde del colapso, la única esperanza de la humanidad yace en las estrellas. Acompaña a un grupo de astronautas hacia lo desconocido.",
    descripción: "Un grupo de exploradores prueban los saltos a través de agujeros de gusano en búsqueda de la sobrevivencia de la humanidad.",
    stock: 6,
    },

    {
    id: 3,
    nombre: "Matrix (Remasterizada)",
    imagen: "https://i.blogs.es/b9141a/matrix-resurrections-cartel/1366_2000.jpeg",
    categoria: "Acción" ,
    precio: 12000,
    sinapsis: "¿Y si todo lo que conoces es una mentira virtual? Despierta a la cruda y trepidante verdad detrás de la simulación más perfecta jamás creada.",
    descripción: "Un hacker se da cuenta por medio de otros rebeldes de la naturaleza de su realidad y su rol en la guerra contra los controladores.",
    stock: 0,
    },

    {
    id: 4,
    nombre: "Blade Runner 2049",
    imagen: "https://seventhartstudio.com/wp-content/uploads/2020/10/Blade-Runner-2049.jpg",
    categoria: "Ciencia ficción",
    precio: 14500,
    sinapsis: "Un oscuro secreto amenanza con quebrar el frágil equilibrio de la sociedad. La respuesta se oculta en el pasado de un legendario Blade Runner.",
    descripción: "Un joven corredor descubrirá una serie de secretos que hará que se embarque en la búsqueda de Rick Deckard, otro corredor que lleva más de treinta años desaparecido.",
    stock: 2,
    },

    {
    id: 5,
    nombre: "ESTRENO - Dune: Parte Dos",
    imagen: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop",
    categoria: "Aventura",
    precio: 19000,
    sinapsis: "El destino del universo se decide en las ardientes arenas de Arrakis. Sé testigo del épico y devastador ascenso de un líder profético.",
    descripción: "Paul Atreides se une a Chani y los Fremen mientras busca venganza contra los conspiradores que destruyeron a su familia.",
    stock: 1,
    },

    {
    id: 6,
    nombre: "John Wick 4",
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/e3ea26fc624df62c57486cfb98575a48fa21c7ed6c1199de54a13639df76905a.jpg",
    categoria: "Acción",
    precio: 13000,
    sinapsis: "El asesino más letal del mundo ya no tiene escapatoria. Prepárate para una cacería global sin tregua donde cada bala cuenta para comprar su libertad.",
    descripción: "John Wick descubre un camino para derrotar a La Mesa, pero, antes de que pueda ganarse su libertad, Wick debe enfrentar a un nuevo enemigo con poderosas alianzas en todo el mundo y fuerzas que convierten a viejos amigos en enemigos.",
    stock: 8,
    },

    {
    id: 7,
    nombre: "The Butterfly Effect",
    imagen: "https://peliculas.lavanguardia.com/imagenes/w500/vtqJkVTvrxbk2BehGO6e6izsUBa.jpg",
    categoria: "Ciencia ficción",
    precio: 19000,
    sinapsis: "¿Cambiarías el pasado si pudieras? Descubre cómo alterar un solo recuerdo puede desencadenar los futuros más oscuros y aterradores.",
    descripción: "Evan Treborn sufre pérdidas de conocimiento durante eventos significativos de su vida. A medida que crece, encuentra una manera de recordar estos recuerdos perdidos y una manera sobrenatural de alterar su vida leyendo su diario.",
    stock: 3,
    },

    {
    id: 8,
    nombre: "Requiem For A Dream",
    imagen: "https://i.scdn.co/image/ab67616d0000b27363e878a2cbc968d18ab11c9e",
    categoria: "Drama",
    precio: 17000,
    sinapsis: "Un viaje perturbador y sin frenos hacia el abismo de las adicciones. ¿Hasta dónde serías capaz de llegar por alcanzar tu sueño?",
    descripción: "Las utopías inducidas por las drogas en cuatro personas de Coney Island se rompen cuando sus adicciones son profundas.",
    stock: 4,
    },

    {
    id: 9,
    nombre: "Carrie",
    imagen: "https://m.media-amazon.com/images/I/61+FtISXgVL.jpg",
    categoria: "Horror psicológico" ,
    precio: 12000,
    sinapsis: "El acoso escolar está a punto de desatar consecuencias fatales. Conoce el despertar de un poder incontrolable y la venganza más sangrienta del instituto.",
    descripción: "Adaptación a serie limitada de la novela de Stephen King, centrada en una estudiante de instituto con poderes telequinéticos.",
    stock: 0,
    },

    {
    id: 10,
    nombre: "Paprika",
    imagen: "https://m.media-amazon.com/images/I/91nM-blCPsL._AC_UF894,1000_QL80_.jpg",
    categoria: "Animación",
    precio: 14500,
    sinapsis: "Cuando los sueños y la realidad colapsan en un carnaval psicodélico incontrolable, solo la detective de los sueños podrá evitar el fin de la cordura.",
    descripción: "Cuando una máquina que permite a los terapeutas entrar en los sueños de sus pacientes es robada, una gran catástrofe amenaza. Solo una joven terapeuta, Paprika, puede detenerlo.",
    stock: 2,
    },

    {
    id: 11,
    nombre: "Eternal Sunshine of the Spotless Mind",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReCsxT4C-rKaift46flQv4WdmyIMIaE0e_EYMDkB5hKIBONNEk9zjmnL8&s=10",
    categoria: "Drama",
    precio: 11000,
    sinapsis: "¿Qué harías si pudieras borrar de tu mente todos los recuerdos de tu ex? Descubre si el verdadero amor es capaz de sobrevivir al olvido absoluto.",
    descripción: "Cuando su relación se vuelve amarga, una pareja se somete a un procedimiento médico para borrarse mutuamente sus recuerdos.",
    stock: 1,
    },

    {
    id: 12,
    nombre: "Avengers: Endgame",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiIyYI6ICZdMIpwS0tYlgpaOj2OtuNrm8u1dtgO1L9_8zo5tBtXZD1h5tV&s=10",
    categoria: "Acción",
    precio: 13000,
    sinapsis: "La mitad del universo ha desaparecido. Acompaña a los héroes sobrevivientes en un último y épico intento por sacrificarlo todo y revertir el chasquido de Thanos.",
    descripción: "Tras los devastadores sucesos de Avengers: Infinity War, el universo está en ruinas pero de los que quedan, los Avengers se unirán una vez más para deshacer la destrucción de Thanos y restaurar el orden del mundo.",
    stock: 6,
    },
    {
        id: 13,
        nombre: "La La Land",
        imagen: "https://images7.alphacoders.com/111/1111669.jpg",
        categoria: "Romance / Musical",
        precio: 11500,
        sinapsis: "Un romance mágico donde los sueños y el amor chocan al ritmo del jazz en Los Ángeles.",
        descripción: "Una aspirante a actriz y un dedicado pianista de jazz luchan por hacer realidad sus sueños en una ciudad conocida por destruir esperanzas y romper corazones. A medida que alcanza el éxito, la pareja se enfrenta a decisiones que comienzan a desmoronar su frágil relación.",
        stock: 8
    },
    {
        id: 14,
        nombre: "El Resplandor",
        imagen: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/9370f169-89d8-48c6-912d-8b10590a4de2/f33aa23b-48d3-11ef-9983-12c0da8c75ad?host=wbd-images.prod-vod.h264.io&partner=beamcom",
        categoria: "Terror",
        precio: 12000,
        sinapsis: "El aislamiento en un hotel solitario despierta los peores demonios de la mente humana.",
        descripción: "Un escritor acepta un trabajo como cuidador de invierno en un hotel aislado en las montañas junto a su esposa y su hijo clarividente. Sin embargo, la soledad y las fuerzas siniestras que habitan el lugar lo empujan lentamente hacia una espiral de violencia y locura.",
        stock: 5
    },
    {
        id: 15,
        nombre: "Obsesión",
        imagen: "https://www.acmodasi.in/amdb/images/movie/w1920/133/97/obsession-2026-908173.webp",
        categoria: "Suspenso / Drama",
        precio: 10500,
        sinapsis: "Cuando el deseo cruza todos los límites, nadie está a salvo de las consecuencias.",
        descripción: "Un exitoso trabajador financiero con una esposa amorosa y una carrera prometedora ve su vida desmoronarse cuando una trabajadora temporal comienza a acosarlo implacablemente, poniendo en peligro todo lo que ha construido.",
        stock: 4
    },
    {
        id: 16,
        nombre: "IT (Eso)",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQikstqlJ_exJ7AwlfeiSBKCtAQKivhQ4FxzLZAdCeSaEBuLNMJuJUvo_k&s=10",
        categoria: "Terror",
        precio: 13500,
        sinapsis: "Tus peores miedos toman la forma de un payaso que acecha en las alcantarillas.",
        descripción: "Cuando comienzan a desaparecer niños en un pequeño pueblo de Maine, un grupo de amigos marginados debe enfrentarse a sus mayores temores al cruzarse con un malvado payaso llamado Pennywise, cuya historia de asesinatos y violencia data de siglos atrás.",
        stock: 9
    },
    {
        id: 17,
        nombre: "Dumbo",
        imagen: "https://images.bauerhosting.com/legacy/empire-tmdb/films/11360/images/sa5vHfu5n4NFqZbVf2hzqGr6bim.jpg?ar=16:9&fit=crop&crop=top",
        categoria: "Animación / Familiar",
        precio: 9500,
        sinapsis: "Aquello que te hace diferente es exactamente lo que te hará volar alto.",
        descripción: "Un pequeño elefante de circo nace con unas orejas descomunales que lo convierten en objeto de burlas. Con la ayuda de un leal amigo ratón, descubre que sus orejas le permiten volar, transformándolo en la mayor estrella del espectáculo.",
        stock: 10
    },
    {
        id: 18,
        nombre: "Bambi",
        imagen: "https://images5.alphacoders.com/114/1144573.jpg",
        categoria: "Animación / Drama",
        precio: 9500,
        sinapsis: "El viaje inolvidable de un pequeño ciervo aprendiendo los secretos y peligros del bosque.",
        descripción: "Desde sus primeros pasos en el bosque junto a sus entrañables amigos Tambor y Flor, un joven ciervo descubre las maravillas de la naturaleza, el valor de la amistad y el dolor de la pérdida en su camino para convertirse en el príncipe del bosque.",
        stock: 7
    },
    {
        id: 19,
        nombre: "Toy Story",
        imagen: "https://wallpapercave.com/wp/wp14735826.jpg",
        categoria: "Animación / Aventura",
        precio: 12500,
        sinapsis: "¿Alguna vez te preguntaste qué hacen tus juguetes cuando sales de la habitación?",
        descripción: "Un vaquero de juguete se siente profundamente amenazado y celoso cuando una nueva y moderna figura de acción de un guardián espacial llega para convertirse en el juguete favorito de su dueño. Ambos deberán superar sus diferencias cuando se pierden en el mundo exterior.",
        stock: 12
    },
    {
        id: 20,
        nombre: "Buscando a Nemo",
        imagen: "https://images8.alphacoders.com/112/1120948.jpg",
        categoria: "Animación / Aventura",
        precio: 12000,
        sinapsis: "Un océano lleno de peligros no detendrá a un padre decidido a recuperar a su hijo.",
        descripción: "Tras la captura de su pequeño hijo en la Gran Barrera de Coral, un tímido y sobreprotector pez payaso se embarca en un peligroso viaje a través del océano hasta Sídney, acompañado por una simpática pez con pérdida de memoria a corto plazo.",
        stock: 8
    },
    {
        id: 21,
        nombre: "Yo, Robot",
        imagen: "https://image.tmdb.org/t/p/original/taHR2bYRluKJENedeAlsgjdUvHx.jpg",
        categoria: "Ciencia Ficción / Acción",
        precio: 11000,
        sinapsis: "En un futuro donde las máquinas sirven al hombre, ¿qué pasa cuando una decide romper las reglas?",
        descripción: "En el año 2035, los robots son asistentes cotidianos y de total confianza para los humanos. Sin embargo, un detective con cierta aversión a la tecnología investiga el presunto suicidio de un brillante científico y sospecha que un androide está implicado, descubriendo una amenaza mayor para la humanidad.",
        stock: 6
    },
    {
        id: 22,
        nombre: "Terminator",
        imagen: "https://wallpaperswide.com/download/terminator_genisys-wallpaper-1600x900.jpg",
        categoria: "Ciencia Ficción / Acción",
        precio: 13000,
        sinapsis: "El futuro de la humanidad depende de sobrevivir a una máquina programada para no detenerse jamás.",
        descripción: "Un ciborg asesino es enviado atrás en el tiempo desde un futuro postapocalíptico con una única misión: eliminar a una joven mujer cuyo hijo aún no nacido se convertirá en la única esperanza de la humanidad en la guerra contra las máquinas.",
        stock: 5
    },
    {
        id: 23,
        nombre: "Soy Leyenda",
        imagen: "https://images2.alphacoders.com/674/674470.jpg",
        categoria: "Ciencia Ficción / Suspenso",
        precio: 11500,
        sinapsis: "El último hombre vivo en la Tierra no está solo... cuando cae el sol, ellos salen a cazar.",
        descripción: "Años después de que una plaga acabara con la mayoría de la humanidad y transformara al resto en criaturas nocturnas mutantes, el único superviviente en la ciudad de Nueva York lucha valientemente por encontrar una cura mientras intenta mantenerse con vida.",
        stock: 7
    },
    {
        id: 24,
        nombre: "Alien: El Octavo Pasajero",
        imagen: "https://wallpaperaccess.com/full/167939.jpg",
        categoria: "Ciencia Ficción / Terror",
        precio: 13500,
        sinapsis: "En la inmensidad del espacio, nadie podrá escuchar tus gritos.",
        descripción: "La tripulación de un remolcador espacial comercial despierta de su letargo para investigar una señal de origen desconocido en un planeta lejano. El terror comienza cuando descubren una forma de vida hostil y letal que se infiltra en su nave.",
        stock: 4
    },
    {
        id: 25,
        nombre: "E.T., el Extraterrestre",
        imagen: "https://images2.alphacoders.com/131/thumb-1920-1312378.jpeg",
        categoria: "Ciencia Ficción / Familiar",
        precio: 11000,
        sinapsis: "Una amistad fuera de este mundo que cambiará sus vidas para siempre.",
        descripción: "Un niño solitario entabla una entrañable amistad con un pacífico alienígena que ha quedado varado accidentalmente en la Tierra. Junto a sus hermanos, intentará mantenerlo en secreto y ayudarlo a encontrar la forma de regresar a su hogar antes de que intervenga el gobierno.",
        stock: 9
    },
    {
        id: 26,
        nombre: "Avatar",
        imagen: "https://wallpapercave.com/wp/2FoBvF7.jpg",
        categoria: "Ciencia Ficción / Aventura",
        precio: 14000,
        sinapsis: "Adéntrate en un nuevo mundo donde un soldado deberá elegir entre sus órdenes y su corazón.",
        descripción: "Un exmarine parapléjico es enviado al exuberante planeta Pandora en una misión única. Sin embargo, al infiltrarse entre los nativos mediante un cuerpo biológico controlado a distancia, se debate entre seguir las órdenes de su corporación o proteger el mundo que siente como su nuevo hogar.",
        stock: 11
    },
    {
        id: 27,
        nombre: "Gladiador",
        imagen: "https://wallpapercat.com/w/full/3/c/0/42749-1920x1080-desktop-1080p-gladiator-wallpaper-photo.jpg",
        categoria: "Acción / Drama",
        precio: 13500,
        sinapsis: "El general que se convirtió en esclavo. El esclavo que desafió a un imperio.",
        descripción: "Traicionado por el corrupto hijo del emperador y despojado de su rango y su familia, un poderoso general romano es reducido a la esclavitud. Forzado a luchar en la arena como gladiador, buscará ascender en el Coliseo para vengar la muerte de sus seres queridos.",
        stock: 8
    },
    {
        id: 28,
        nombre: "Los Increíbles",
        imagen: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/de4eg43-ab228986-f5ee-4391-8ca3-361f1bf4ae34.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi81Mjk4YmFjMC1iOGJmLTRjODAtYWY2Ny03MjVjMTI3MmRiYjAvZGU0ZWc0My1hYjIyODk4Ni1mNWVlLTQzOTEtOGNhMy0zNjFmMWJmNGFlMzQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.f-xJIOChjiYqZO3fYn2H0zUYu70feoy6BtYfPPEINbs",
        categoria: "Animación / Acción",
        precio: 12000,
        sinapsis: "Salvar el mundo es fácil, lo difícil es mantener unida a una familia de superhéroes.",
        descripción: "Obligados a adoptar vidas civiles en los suburbios tras prohibirse las actividades de los superhéroes, un antiguo justiciero y su esposa deciden volver a la acción en secreto, lo que termina arrastrando a toda su familia a una misión para salvar al mundo de un villano vengativo.",
        stock: 10
    },
    {
        id: 29,
        nombre: "El Grinch",
        imagen: "https://wallpapercat.com/w/full/9/6/7/531787-1920x1080-desktop-1080p-how-the-grinch-stole-christmas-background.jpg",
        categoria: "Comedia / Familiar",
        precio: 10000,
        sinapsis: "Está gruñón, es verde y tiene el plan perfecto para robarse la Navidad.",
        descripción: "En las afueras de un alegre pueblo vive una criatura verde y solitaria que detesta las fiestas navideñas. Cansado de los ruidos y los festejos de sus vecinos, decide disfrazarse y bajar de su montaña en Nochebuena para robar todos los adornos y regalos.",
        stock: 6
    },
    {
        id: 30,
        nombre: "Batman: El Caballero de la Noche",
        imagen: "https://wallpapercave.com/wp/JUbQu94.jpg",
        categoria: "Acción / Crimen",
        precio: 14500,
        sinapsis: "Cuando el caos puro se apodera de la ciudad, el héroe debe cruzar sus propios límites.",
        descripción: "Con la ayuda de la policía y un nuevo fiscal de distrito, el justiciero enmascarado se propone desmantelar las organizaciones criminales que plagan las calles. La alianza resulta efectiva hasta que surge una mente criminal anárquica conocida como el Guasón, que sume a la ciudad en el caos.",
        stock: 9
    },
    {
        id: 31,
        nombre: "Harry Potter y la Piedra Filosofal",
        imagen: "https://4kwallpapers.com/images/walls/thumbs_3t/10617.jpg",
        categoria: "Fantasía / Aventura",
        precio: 13000,
        sinapsis: "Una carta inesperada abrirá las puertas a un mundo oculto lleno de magia y misterios.",
        descripción: "Al cumplir once años, un niño huérfano descubre que es un mago y es invitado a asistir a un prestigioso colegio de magia y hechicería. Allí hará amigos inseparables, aprenderá a volar en escoba y se enfrentará al oscuro secreto detrás del destino de sus padres.",
        stock: 15
    },
    {
        id: 32,
        nombre: "Percy Jackson y el Ladrón del Rayo",
        imagen: "https://images4.alphacoders.com/809/thumb-1920-809637.jpg",
        categoria: "Fantasía / Aventura",
        precio: 11000,
        sinapsis: "Los dioses del Olimpo son reales, y uno de sus hijos está a punto de desatar una guerra.",
        descripción: "Un adolescente con problemas en la escuela descubre que es el descendiente de una deidad griega. Acusado injustamente de haber robado el poderoso rayo de Zeus, deberá embarcarse en una peligrosa aventura por todo el país para atrapar al verdadero ladrón y evitar una guerra entre los dioses.",
        stock: 7
    },
    {
        id: 33,
        nombre: "Star Wars: Una Nueva Esperanza",
        imagen: "https://static0.srcdn.com/wordpress/wp-content/uploads/Star-Wars-A-New-Hope-Poster1.jpg",
        categoria: "Ciencia Ficción / Aventura",
        precio: 14000,
        sinapsis: "En una galaxia muy lejana, la chispa de la rebelión está en manos de un joven granjero.",
        descripción: "Un joven que sueña con aventuras más allá de su planeta desértico se une a un sabio maestro, un piloto contrabandista y dos droides para rescatar a una líder rebelde de las garras de un malvado Imperio Galáctico y destruir su arma más letal.",
        stock: 8
    },
    {
        id: 34,
        nombre: "Cuando Acecha la Maldad",
        imagen: "https://img.asmedia.epimg.net/resizer/v2/MVXAY752TZC3VB6DYPNXT4NCPQ.jpg?auth=d019d29970c0d034e08a82de9d19b063827cde010d89998148a4026eba83944f&width=1472&height=828&smart=true",
        categoria: "Terror",
        precio: 13500,
        sinapsis: "En el campo profundo, las reglas para sobrevivir al mal ya se han roto.",
        descripción: "En un pueblo remoto lejos de las grandes ciudades, dos hermanos descubren a un hombre infectado por fuerzas demoníacas que está a punto de dar a luz al mal mismo. Al intentar deshacerse de él sin seguir los protocolos adecuados, desatan una epidemia de posesiones imparable.",
        stock: 6
    },
    {
        id: 35,
        nombre: "El Secreto de sus Ojos",
        imagen: "https://img.rtve.es/n/16444132",
        categoria: "Drama / Suspenso",
        precio: 13000,
        sinapsis: "Uno puede cambiar de todo, menos de pasión... ni olvidar un crimen sin resolver.",
        descripción: "Un empleado judicial recién jubilado decide escribir una novela basada en un brutal caso de asesinato ocurrido veinticinco años atrás que lo marcó para siempre. Al revivir el pasado, también se enfrenta al recuerdo de un amor silencioso que nunca se animó a confesar.",
        stock: 10
    },
    {
        id: 36,
        nombre: "Relatos Salvajes",
        imagen: "https://assets.awwwards.com/awards/images/2014/09/relatos-salvajes-website.jpg",
        categoria: "Comedia Negra / Drama",
        precio: 12500,
        sinapsis: "Todos tenemos un límite... ¿qué pasa cuando cruzamos la línea hacia la locura?",
        descripción: "Seis historias independientes unidas por un tema común: la vulnerabilidad de los seres humanos ante una realidad que súbitamente se altera y se torna impredecible, empujando a los personajes a perder el control y cruzar la delgada línea que separa la civilización de la barbarie.",
        stock: 9
    },
    {
        id: 37,
        nombre: "La Odisea de los Giles",
        imagen: "https://www.madariaga.gob.ar/fotos/madariaga/noticias/la-odisea.jpg",
        categoria: "Comedia / Aventura",
        precio: 12000,
        sinapsis: "Perdieron sus ahorros por culpa de un estafador, pero se unieron para recuperar lo suyo.",
        descripción: "En un pequeño pueblo de la provincia de Buenos Aires a fines de 2001, un grupo de vecinos reúne todos sus ahorros para reactivar una cooperativa agrícola. Tras ser víctimas de una estafa por parte de un abogado y un gerente bancario justo antes del corralito, trazan un plan minucioso para recuperar su dinero.",
        stock: 8
    },
    {
        id: 38,
        nombre: "Esperando la Carroza",
        imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/artear/4FAYPPCPF76WOVQTT4URQCWCVY.jpg",
        categoria: "Comedia",
        precio: 11500,
        sinapsis: "Un domingo en familia que se transforma en el caos más divertido e inolvidable.",
        descripción: "La confusión reina en una familia disfuncional cuando la abuela octogenaria desaparece y, tras una serie de malentendidos, todos creen que se ha quitado la vida. Mientras organizan el velorio entre reproches, hipocresías y discusiones absurdas, nadie imagina dónde está realmente la anciana.",
        stock: 12
    },
    {
        id: 39,
        nombre: "Los Otros",
        imagen: "https://www.acmodasi.in/amdb/images/movie/w1920/0/19/the-others-2001-624967.webp",
        categoria: "Suspenso / Terror",
        precio: 11500,
        sinapsis: "En una mansión sumida en la oscuridad, las puertas nunca deben abrirse sin cerrar la anterior.",
        descripción: "Al finalizar la Segunda Guerra Mundial, una mujer espera el regreso de su marido en una aislada mansión victoriana junto a sus dos hijos pequeños, quienes sufren una extraña enfermedad que les impide recibir la luz del sol. La llegada de tres nuevos sirvientes coincide con extraños sucesos en la casa.",
        stock: 5
    },
    {
        id: 40,
        nombre: "Bastardos sin Gloria",
        imagen: "https://image.tmdb.org/t/p/original/bMJxwgLyD47CDQ6BFCT2AMMlID7.jpg",
        categoria: "Acción / Bélico",
        precio: 13500,
        sinapsis: "En la Francia ocupada, dos planes de venganza están a punto de cambiar la historia en una sala de cine.",
        descripción: "Durante la Segunda Guerra Mundial, un grupo de soldados estadounidenses de origen judío es seleccionado para sembrar el terror entre las filas del Tercer Reich. Paralelamente, una joven dueña de un cine en París planea su propia venganza durante el estreno de una película nazi.",
        stock: 7
    },
    {
        id: 41,
        nombre: "Argentina, 1985",
        imagen: "https://m.media-amazon.com/images/S/pv-target-images/1adb65ff8dc9f3b50922b5944a2cf045cbad79be18554c15a14513b315121920.jpg",
        categoria: "Drama / Historia",
        precio: 13000,
        sinapsis: "Contra todo pronóstico y amenaza, un equipo de jóvenes y dos fiscales hicieron historia en los tribunales.",
        descripción: "Inspirada en hechos reales, narra la historia de los fiscales Julio Strassera y Luis Moreno Ocampo, quienes en 1985 se atrevieron a investigar y enjuiciar a la cúpula de la dictadura militar más sangrienta de la historia argentina, formando un equipo jurídico de jóvenes inexpertos en una carrera contra el tiempo.",
        stock: 11
    },
    {
        id: 42,
        nombre: "El Robo del Siglo",
        imagen: "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2021/06/29/robo-siglo.jpeg",
        categoria: "Comedia / Crimen",
        precio: 12000,
        sinapsis: "Con armas de juguete y un plan brillante, vaciaron un banco frente a cientos de policías.",
        descripción: "Basada en el famoso asalto ocurrido en 2006 al Banco Río de Acassuso. Un artista con alma de filósofo recluta a una banda de ladrones experimentados para llevar a cabo un golpe maestro donde la astucia y el engaño psicológico valen más que la violencia.",
        stock: 9
    },
    {
        id: 43,
        nombre: "Zathura: Una Aventura Espacial",
        imagen: "https://images4.alphacoders.com/114/thumb-1920-1146874.jpg",
        categoria: "Aventura / Familiar",
        precio: 10000,
        sinapsis: "No es solo un juego de mesa... cada turno lanza tu casa más lejos en el espacio profundo.",
        descripción: "Dos hermanos que pelean constantemente encuentran un misterioso juego de mesa mecánico en el sótano de su casa. Al empezar a jugar, descubren que su hogar ha sido propulsado al espacio exterior y que la única forma de regresar a la Tierra es llegar hasta la casilla final.",
        stock: 6
    },
    {
        id: 44,
        nombre: "El Expreso Polar",
        imagen: "https://images6.alphacoders.com/336/336244.jpg",
        categoria: "Animación / Aventura",
        precio: 10500,
        sinapsis: "Sube a bordo de un tren mágico donde lo único que importa es volver a creer.",
        descripción: "En una fría Nochebuena, un niño que comienza a dudar de la existencia de Papá Noel aborda un misterioso tren de vapor que se detiene frente a su casa. El viaje hacia el Polo Norte lo llevará a vivir una aventura inolvidable sobre la amistad, la valentía y el espíritu navideño.",
        stock: 8
    },
    {
        id: 45,
        nombre: "Las Locuras del Emperador",
        imagen: "https://m.media-amazon.com/images/S/pv-target-images/bf3268458d9b2c0fee13c62590d35201a3e9555fd8a14e9ed885ad4f842d453a.jpg",
        categoria: "Animación / Comedia",
        precio: 11500,
        sinapsis: "Era el rey del mundo, hasta que una poción equivocada lo convirtió en una llama parlante.",
        descripción: "Un joven y arrogante emperador inca planea construir su casa de verano destruyendo la aldea de un bondadoso campesino. Sin embargo, su ambiciosa exconsejera intenta envenenarlo y accidentalmente lo transforma en una llama, obligándolo a pedir ayuda al mismo aldeano que pensaba desalojar.",
        stock: 10
    },
    {
        id: 46,
        nombre: "Tierra de Osos",
        imagen: "https://image.tmdb.org/t/p/original/4k0WyVqOAI5SEJPJtvylY5q3HWa.jpg",
        categoria: "Animación / Aventura",
        precio: 10500,
        sinapsis: "Para entender a tu enemigo, a veces debes caminar en sus propias garras.",
        descripción: "Un joven cazador impulsivo busca venganza contra un oso tras una tragedia familiar. Sin embargo, los espíritus ancestrales lo transforman mágicamente en el mismo animal que tanto odia. Para recuperar su forma humana, deberá viajar junto a un pequeño osezno parlanchín que le enseñará el verdadero valor de la hermandad.",
        stock: 7
    },
    {
        id: 47,
        nombre: "Chicken Little",
        imagen: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/dkz2on1-307a7d7e-bcdf-49b2-b987-6b8c2bd901d2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi81Mjk4YmFjMC1iOGJmLTRjODAtYWY2Ny03MjVjMTI3MmRiYjAvZGt6Mm9uMS0zMDdhN2Q3ZS1iY2RmLTQ5YjItYjk4Ny02YjhjMmJkOTAxZDIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.D7SY-Nvmm5Dp8M4y1zfNXTW3HAHsPYur23fCxhGfXIs",
        categoria: "Animación / Comedia",
        precio: 9500,
        sinapsis: "Nadie le creyó cuando dijo que el cielo se caía, pero esta vez los extraterrestres son reales.",
        descripción: "Un año después de causar el pánico en su pueblo al asegurar que un pedazo de cielo le había caído en la cabeza, un pequeño pollito intenta recuperar su reputación y el orgullo de su padre. Todo se complica cuando descubre que aquel trozo de cielo era parte de una nave espacial alienígena.",
        stock: 6
    },
    {
        id: 48,
        nombre: "Valiente",
        imagen: "https://wallpapercat.com/w/full/a/f/d/277376-2880x1800-desktop-hd-brave-disney-wallpaper-image.jpg",
        categoria: "Animación / Aventura",
        precio: 11500,
        sinapsis: "Si tuvieras la oportunidad de cambiar tu destino, ¿te atreverías a hacerlo?",
        descripción: "En las tierras altas de Escocia, una hábil arquera e impetuosa princesa desafía una antigua costumbre sagrada para seguir su propio camino, desatando sin querer el caos en el reino. Tras pedir ayuda a una excéntrica bruja, deberá usar todo su coraje para deshacer un terrible hechizo antes de que sea demasiado tarde.",
        stock: 8
    },
    {
        id: 49,
        nombre: "Náufrago",
        imagen: "https://m.media-amazon.com/images/M/MV5BMGI4OGMwNzgtM2M0MS00MWZhLWIwZjYtZGU2NTkzOTI2YWVjXkEyXkFqcGc@._V1_.jpg",
        categoria: "Drama / Aventura",
        precio: 12000,
        sinapsis: "Atrapado en una isla desierta donde el tiempo ya no importa, la esperanza es la única forma de sobrevivir.",
        descripción: "Un ejecutivo de una empresa de envíos, cuya vida está estrictamente regida por el reloj, sobrevive a un accidente aéreo en el Pacífico Sur. Aislado en una isla deshabitada durante años, deberá aprender a subsistir física y emocionalmente para algún día poder regresar a casa.",
        stock: 7
    },
    {
        id: 50,
        nombre: "La Vida es Bella",
        imagen: "https://arjai.es/wp-content/uploads/2016/10/lavitella.png?w=554",
        categoria: "Drama / Comedia",
        precio: 13500,
        sinapsis: "En medio del horror más oscuro, la imaginación de un padre fue el escudo más grande para su hijo.",
        descripción: "Durante la Segunda Guerra Mundial, un hombre judío-italiano de gran ingenio y buen humor es enviado junto a su pequeño hijo a un campo de concentración. Para proteger al niño del terror que los rodea, le hace creer que todo forma parte de un elaborado juego cuyo premio final es un tanque de guerra.",
        stock: 9
    },
    {
        id: 51,
        nombre: "Forrest Gump",
        imagen: "https://wallpapercat.com/w/full/5/4/b/34381-1920x1080-desktop-full-hd-forrest-gump-wallpaper-photo.jpg",
        categoria: "Drama / Romance",
        precio: 13500,
        sinapsis: "La vida es como una caja de chocolates, y un hombre de corazón puro está a punto de recorrer la historia.",
        descripción: "Sentado en el banco de una parada de autobús, un hombre con un coeficiente intelectual modesto pero de gran nobleza relata su extraordinaria vida, en la que sin proponérselo fue testigo y protagonista de algunos de los eventos más importantes de la segunda mitad del siglo XX mientras nunca dejó de amar a su amiga de la infancia.",
        stock: 11
    },
    {
        id: 52,
        nombre: "Una Noche en el Museo",
        imagen: "https://images8.alphacoders.com/794/thumb-1920-794039.jpg",
        categoria: "Comedia / Fantasía",
        precio: 10500,
        sinapsis: "Cuando las puertas se cierran y el sol se oculta, la historia cobra vida literalmente.",
        descripción: "Un hombre divorciado en busca de estabilidad laboral acepta el puesto de guardia nocturno en el Museo de Historia Natural de Nueva York. En su primer turno descubre que, debido a una antigua maldición egipcia, todas las exhibiciones cobran vida al caer la noche.",
        stock: 8
    },
    {
        id: 53,
        nombre: "Chiquito pero Peligroso",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjInBWgjeH4Eke340PM3o0atAfOXMXM056kP4k4UUp4s14CUOJhfGTqHFT&s=10",
        categoria: "Comedia",
        precio: 10000,
        sinapsis: "No es un bebé adorable, es el ladrón de joyas más buscado de la ciudad.",
        descripción: "Un peligroso ladrón de baja estatura recién salido de prisión roba un valioso diamante pero, acorralado por la policía, lo esconde en el bolso de una pareja. Para recuperarlo, decide hacerse pasar por un bebé abandonado para ser adoptado por el matrimonio.",
        stock: 5
    },
    {
        id: 54,
        nombre: "¿Y Dónde Están las Rubias?",
        imagen: "https://m.media-amazon.com/images/S/pv-target-images/4aef891def3448287f41f06b1e1e32c9b3084e349d8a7bd21d4cfb19b8276791.jpg",
        categoria: "Comedia",
        precio: 12000,
        sinapsis: "Dos agentes del FBI en desgracia y el disfraz más ridículo e inolvidable del cine.",
        descripción: "Para evitar ser despedidos tras arruinar una misión, dos hermanos agentes del FBI deben escoltar a un par de jóvenes millonarias que están bajo amenaza de secuestro. Cuando las hermanas se niegan a salir del hotel por un rasguño, los agentes deciden disfrazarse de ellas e infiltrarse en la alta sociedad.",
        stock: 14
    },
    {
        id: 55,
        nombre: "¿Qué Pasó Ayer?",
        imagen: "https://wallpapercat.com/w/middle-retina/4/c/9/365970-1920x1280-desktop-hd-the-hangover-wallpaper-image.jpg",
        categoria: "Comedia",
        precio: 12000,
        sinapsis: "Un tigre en el baño, un bebé en el armario, ningún recuerdo de la noche anterior y el novio desaparecido.",
        descripción: "Dos días antes de su boda, un hombre y tres amigos viajan a Las Vegas para una despedida de soltero inolvidable. Sin embargo, a la mañana siguiente despiertan con la suite destruida, sin recordar absolutamente nada de lo ocurrido y con el futuro esposo desaparecido.",
        stock: 10
    },
    {
        id: 56,
        nombre: "Son Como Niños",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj7AMFngaJ-kYK0QxljDFGqlUJNSdHfKoN-4FfuwxgZF6rlsjD6IEAo_5T&s=10",
        categoria: "Comedia",
        precio: 11000,
        sinapsis: "Los años pasan, pero cuando cinco viejos amigos se reúnen, la madurez queda en el olvido.",
        descripción: "Treinta años después de graduarse de la escuela secundaria, cinco buenos amigos y excompañeros de equipo de básquetbol se reúnen junto a sus respectivas familias en una casa del lago para pasar el fin de semana del Día de la Independencia y rendir homenaje a su fallecido entrenador.",
        stock: 9
    },
    {
        id: 57,
        nombre: "Scary Movie",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiVX6tH1QyrEFCwJ2ltI5c9XDxx5zpb5Fih9FImDNvcI9mZXH5vLF1Lx0&s=10",
        categoria: "Comedia",
        precio: 10500,
        sinapsis: "Sin piedad, sin vergüenza y sin sentido: la parodia donde ningún cliché del cine de terror se salva.",
        descripción: "Un año después de atropellar accidentalmente a un hombre y deshacerse del cuerpo, un grupo de adolescentes despistados comienza a ser acosado por un torpe asesino enmascarado en una desopilante parodia de las películas de terror y suspenso más famosas de los años noventa.",
        stock: 7
    },
    {
        id: 58,
        nombre: "Todopoderoso",
        imagen: "https://wallpapercat.com/w/full/b/6/4/361457-2048x1152-desktop-hd-bruce-almighty-background-image.jpg",
        categoria: "Comedia / Fantasía",
        precio: 11500,
        sinapsis: "Se quejó tanto de su mala suerte que Dios decidió tomarse vacaciones y dejarle el puesto.",
        descripción: "Un reportero de televisión descontento que culpa constantemente al Todopoderoso por sus fracasos recibe una oferta inesperada: Dios decide otorgarle todos sus poderes divinos durante una semana para ver si es capaz de hacer un mejor trabajo dirigiendo el mundo.",
        stock: 8
    },
    {
        id: 59,
        nombre: "Virgen a los 40",
        imagen: "https://images.justwatch.com/backdrop/176248832/s640/virgen-a-los-40.jpg",
        categoria: "Comedia / Romance",
        precio: 10500,
        sinapsis: "Sus compañeros de trabajo descubrieron su mayor secreto y ahora tienen una misión: conseguirle una cita.",
        descripción: "Un hombre amable y tranquilo de cuarenta años que colecciona figuras de acción y trabaja en una tienda de electrónica nunca ha tenido relaciones. Cuando sus compañeros de trabajo se enteran por accidente, se proponen ayudarlo a toda costa, hasta que conoce a una madre soltera de la que se enamora de verdad.",
        stock: 6
    },
    {
        id: 60,
        nombre: "Las Vacaciones de Mr. Bean",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNCWidTXjxt8DEWtuQmm_Nomciez8N84Y_C9AyW8yQ9nBQnNCGfAiqTxya&s=10",
        categoria: "Comedia / Familiar",
        precio: 10000,
        sinapsis: "Un boleto de lotería rumbo a las playas de Francia y un rastro de desastres involuntarios en el camino.",
        descripción: "Tras ganar una rifa benéfica, el torpe pero bienintencionado Mr. Bean emprende un viaje hacia la Riviera Francesa con una cámara de video en mano. En el trayecto provoca una serie de enredos que lo llevan a cruzar el país intentando reunir a un niño pequeño con su padre cineasta.",
        stock: 7
    },
    {
        id: 61,
        nombre: "Coyote vs. Acme",
        imagen: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/dmqv1e0-8e6a279c-d665-4138-8733-f0bd593707bc.jpg/v1/fill/w_1192,h_670,q_70,strp/coyote_vs_acme_wallpaper_looney_tunes_wallpaper_by_thekingblader995_dmqv1e0-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiIvZi81Mjk4YmFjMC1iOGJmLTRjODAtYWY2Ny03MjVjMTI3MmRiYjAvZG1xdjFlMC04ZTZhMjc5Yy1kNjY1LTQxMzgtODczMy1mMGJkNTkzNzA3YmMuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.EI_nz98GiPXIwD7nHjYWczFV7mX2zqFk75XmpNl5gUc",
        categoria: "Comedia / Animación",
        precio: 12500,
        sinapsis: "Después de miles de explosiones y productos fallidos, el cliente más fiel decide llevar a la empresa a juicio.",
        descripción: "Cansado de que todos los artilugios que compra le exploten en la cara mientras intenta atrapar al Correcaminos, el famoso Coyote contrata a un abogado en horas bajas para demandar a la gigantesca corporación Acme, enfrentándose en los tribunales al intimidante jefe de su antiguo representante legal.",
        stock: 5
    },
    {
        id: 62,
        nombre: "Todo en Todas Partes al Mismo Tiempo",
        imagen: "https://images7.alphacoders.com/122/1229936.jpg",
        categoria: "Ciencia Ficción / Comedia",
        precio: 14000,
        sinapsis: "Infinitos universos, impuestos atrasados y una madre que debe conectar con todas sus vidas para salvar el multiverso.",
        descripción: "Una inmigrante china de mediana edad, agobiada por los problemas familiares y una auditoría fiscal de su lavandería, se ve envuelta en una loca aventura en la que solo ella puede salvar la existencia explorando otros universos y conectándose con las vidas que podría haber llevado.",
        stock: 9
    },
    {
        id: 63,
        nombre: "El Aro",
        imagen: "https://images2.alphacoders.com/824/thumb-1920-824908.jpg",
        categoria: "Terror / Misterio",
        precio: 11500,
        sinapsis: "Primero ves la cinta, luego suena el teléfono... y te quedan exactamente siete días de vida.",
        descripción: "Una periodista decide investigar una leyenda urbana sobre una misteriosa cinta de video llena de imágenes perturbadoras que aparentemente causa la muerte de quien la reproduce una semana después. Cuando su propio hijo ve la grabación, comienza una carrera desesperada para romper la maldición.",
        stock: 6
    },
    {
        id: 64,
        nombre: "El Conjuro",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXU7Nqup0NTo109HoMTMYUhez5iQ9V80L2Gl5wMBwf_uQrCUozKUGlC1zk&s=10",
        categoria: "Terror",
        precio: 13000,
        sinapsis: "Basada en los archivos reales de un caso tan aterrador que se mantuvo oculto durante décadas.",
        descripción: "En la década de 1970, los reconocidos investigadores de fenómenos paranormales Ed y Lorraine Warren acuden a ayudar a una familia que se ha mudado a una antigua granja aislada, donde una presencia oscura y demoníaca comienza a aterrorizarlos cada noche.",
        stock: 8
    },
    {
        id: 65,
        nombre: "El Exorcista",
        imagen: "https://image.tmdb.org/t/p/w500_and_h282_face/xcjJ5khg2yzOa282mza39Lbrm7j.jpg",
        categoria: "Terror",
        precio: 13000,
        sinapsis: "Cuando la ciencia ya no tiene respuestas, solo la fe puede enfrentar al mal absoluto.",
        descripción: "Una actriz comienza a notar cambios drásticos y aterradores en el comportamiento de su hija de doce años. Tras someterla a todo tipo de análisis médicos sin éxito, acude desesperada a un sacerdote con crisis de fe y a un experto exorcista para salvar el alma de la niña.",
        stock: 5
    },
    {
        id: 66,
        nombre: "Cementerio de Animales",
        imagen: "https://i.blogs.es/0a33a8/pet-sematary-precuela-03/650_1200.jpg",
        categoria: "Terror",
        precio: 11000,
        sinapsis: "A veces, lo que regresa de la tierra sagrada ya no es lo mismo que enterraste.",
        descripción: "Una familia se muda de la ciudad a una tranquila casa rural cerca de una carretera muy transitada y de un antiguo cementerio en el bosque. Cuando sufren una tragedia devastadora, el padre descubre que el terreno oculta un poder capaz de devolver la vida a los muertos, con consecuencias aterradoras.",
        stock: 6
    },
    {
        id: 67,
        nombre: "Viernes 13",
        imagen: "https://images5.alphacoders.com/442/442589.jpg",
        categoria: "Terror",
        precio: 11000,
        sinapsis: "El campamento de verano reabre sus puertas, pero alguien en el bosque no permitirá que nadie se vaya.",
        descripción: "Años después de que ocurriera un trágico ahogamiento y una serie de crímenes sin resolver, un grupo de jóvenes monitores llega al abandonado campamento Crystal Lake para acondicionarlo antes de su reapertura, ignorando las advertencias de los lugareños mientras son acechados uno por uno.",
        stock: 7
    },
    {
        id: 68,
        nombre: "Pesadilla en la Calle Elm",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSRLBZpFpq1PYBJloIFQ8slcq5UumWoIxm4BxCJnUqrVKmrVIzoBTqv-M&s=10",
        categoria: "Terror",
        precio: 11500,
        sinapsis: "Uno, dos, ya viene por ti... si te quedas dormido en tus sueños, no despertarás jamás.",
        descripción: "Varios adolescentes de un tranquilo vecindario comienzan a tener las mismas pesadillas en las que son perseguidos por un hombre desfigurado con un guante de cuchillas. Pronto descubren que lo que ocurre dentro de sus sueños tiene consecuencias mortales en el mundo real.",
        stock: 6
    },
    {
        id: 69,
        nombre: "La Maldición (The Grudge)",
        imagen: "https://m.media-amazon.com/images/S/pv-target-images/468f4b5c6d98bc82555d34fedae6623f9ece9fdcb4650a75c52e3b451cefca08._UR1920,1080_.jpg",
        categoria: "Terror",
        precio: 10500,
        sinapsis: "Cuando alguien muere consumido por una ira extrema, nace una sombra que jamás perdona a quien cruza su puerta.",
        descripción: "Una estudiante estadounidense de intercambio en Tokio que trabaja como voluntaria de asistencia social es enviada a cuidar a una anciana en una casa aparentemente normal. Sin embargo, el lugar esconde una maldición sobrenatural que condena a todo aquel que entra en contacto con él.",
        stock: 5
    },
    {
        id: 70,
        nombre: "El Padrino",
        imagen: "https://images5.alphacoders.com/131/1315822.jpg",
        categoria: "Crimen / Drama",
        precio: 15000,
        sinapsis: "Una oferta que no podrás rechazar en la obra maestra sobre el poder, la lealtad y la familia.",
        descripción: "El envejecido patriarca de una de las cinco familias que ejercen el mando de la Cosa Nostra en Nueva York durante los años cuarenta intenta transferir el control de su imperio clandestino a su hijo menor, quien inicialmente desea mantenerse al margen de los negocios turbios.",
        stock: 10
    },
    {
        id: 71,
        nombre: "El Padrino (Edición Blanco y Negro)",
        imagen: "https://wallpapercat.com/w/full/b/b/0/174258-2560x1600-desktop-hd-the-godfather-wallpaper-photo.jpg",
        categoria: "Crimen / Drama",
        precio: 16000,
        sinapsis: "Revive la leyenda de la familia Corleone con una estética clásica de contrastes profundos y sombras.",
        descripción: "Edición especial de colección en blanco y negro que resalta la fotografía original de la historia de Vito y Michael Corleone. Una mirada única a la transición del poder mafioso en la Nueva York de posguerra, donde las luces y las sombras reflejan la dualidad moral de sus protagonistas.",
        stock: 4
    },
    {
        id: 72,
        nombre: "Kill Bill: Volumen 1",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYPXvNQNktc8B7BCaau8LCqHiNkPr9K0t39XkdohDVEgAMjqymNZ0c2mo_&s=10",
        categoria: "Acción",
        precio: 13000,
        sinapsis: "La dejaron por muerta el día de su boda; ahora tiene una espada samurái y una lista de cinco nombres.",
        descripción: "Tras despertar de un coma de cuatro años provocado por la traición de su antiguo jefe y su escuadrón de asesinos durante el ensayo de su casamiento, una letal guerrera emprende un implacable viaje alrededor del mundo para tachar uno a uno los nombres de su lista de venganza.",
        stock: 8
    },
    {
        id: 73,
        nombre: "Rocky",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoQXTW0EvCncZ60vzSwFpdu9Wyb1AwZUW8UI3wZg5m-J9v3NnKAu_bvA&s=10",
        categoria: "Drama / Deporte",
        precio: 12500,
        sinapsis: "No se trata de qué tan fuerte puedas golpear, sino de resistir de pie hasta que suene la campana final.",
        descripción: "Un boxeador de poca monta que se gana la vida como cobrador en los barrios bajos de Filadelfia recibe la oportunidad única en la vida de enfrentarse al campeón mundial de los pesos pesados, entrenando sin descanso para demostrarse a sí mismo que no es un perdedor.",
        stock: 9
    },
    {
        id: 74,
        nombre: "Nosferatu",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1T_5Z4L2NmmK5Qg5UPEihHZyg30hZbpWcHBLVWbUMA7Yq9Ro4KQgdYpe&s=10",
        categoria: "Terror / Clásico",
        precio: 12000,
        sinapsis: "Desde las sombras de un castillo en los Cárpatos, la primera gran pesadilla del cine despierta su sed.",
        descripción: "Un joven agente inmobiliario viaja a las remotas montañas de Transilvania para cerrar la venta de una propiedad con un misterioso conde. Pronto descubre que su anfitrión es un antiguo vampiro que planea mudarse a su ciudad natal llevando consigo una plaga de oscuridad y muerte.",
        stock: 5
    },
    {
        id: 75,
        nombre: "Los Locos Addams",
        imagen: "https://images6.alphacoders.com/817/thumb-1920-817722.jpg",
        categoria: "Comedia / Fantasía",
        precio: 11500,
        sinapsis: "Son espeluznantes, excéntricos y están a punto de recibir de vuelta al miembro más extraño del clan.",
        descripción: "Un abogado sin escrúpulos conspira con una prestamista para estafar la fortuna de una excéntrica familia de gustos góticos y macabros, infiltrando a un hombre que asegura ser el hermano perdido del patriarca desaparecido hace veinticinco años.",
        stock: 8
    },
    {
        id: 76,
        nombre: "Oppenheimer",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUMDDnZjtKdLUS8lghsXaHaLqw8EdeUByGk6FGOCb0rZdKq0SUgqzkUr-h&s=10",
        categoria: "Drama / Historia",
        precio: 15000,
        sinapsis: "El hombre que descifró el fuego de las estrellas y cambió el destino de la humanidad para siempre.",
        descripción: "Durante la Segunda Guerra Mundial, el brillante físico teórico J. Robert Oppenheimer es designado para liderar el ultrasecreto Proyecto Manhattan en el desierto de Los Álamos, enfrentándose al dilema moral de arriesgarse a destruir el mundo con tal de poner fin al conflicto.",
        stock: 12
    },
    {
        id: 77,
        nombre: "El Faro",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE9xovFc7bOzfFhbIFBA1L4OymnTa-J9SmNtRnkFGcbDOFeZAPbvPRyPhx&s=10",
        categoria: "Terror / Suspenso",
        precio: 12500,
        sinapsis: "Dos hombres, una roca en medio de la tormenta y un secreto hipnótico en lo alto de la torre.",
        descripción: "A finales del siglo XIX, dos fareros llegan a una remota y misteriosa isla de Nueva Inglaterra para cumplir un turno de cuatro semanas. Cuando una feroz tormenta los deja incomunicados, el aislamiento, el alcohol y las visiones marinas desatan una intensa batalla psicológica.",
        stock: 6
    },
    {
        id: 78,
        nombre: "El Monstruo de la Laguna Negra",
        imagen: "https://images.alphacoders.com/153/thumb-1920-153883.jpg",
        categoria: "Terror / Ciencia Ficción",
        precio: 10500,
        sinapsis: "En las profundidades inexploradas del Amazonas habita un eslabón perdido que no quiere intrusos.",
        descripción: "Una expedición científica que busca fósiles a lo largo del río Amazonas descubre la existencia de una criatura prehistórica anfibia con forma humanoide. Cuando los investigadores intentan capturarla para su estudio, el monstruo se defiende acechando su embarcación.",
        stock: 4
    },
    {
        id: 79,
        nombre: "Tiburón",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE7uZGRmMF_3-35qibLMV4fLXhLs_hLJNBTbzRq_ToG6HPPQuqA00XOKs&s=10",
        categoria: "Suspenso / Aventura",
        precio: 13000,
        sinapsis: "Dos notas musicales bastan para que nunca más quieras volver a meterte al mar.",
        descripción: "Cuando un gigantesco tiburón blanco comienza a atacar a los bañistas de una pequeña isla turística en pleno inicio de la temporada de verano, el jefe de la policía local se une a un biólogo marino y a un veterano cazador de escualos para darle caza en alta mar.",
        stock: 8
    },
    {
        id: 80,
        nombre: "Piraña",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaYb2_ZJLR82e0Um8eevOMwf1gsvwGim61Nl_eY5G_AVzcqg01o9icKNfE&s=10",
        categoria: "Terror / Suspenso",
        precio: 9500,
        sinapsis: "Las vacaciones de primavera se tiñen de rojo cuando el fondo del lago se abre.",
        descripción: "Un terremoto subacuático libera a miles de peces carnívoros prehistóricos que habían permanecido encerrados durante siglos en una caverna sumergida. Una comisaria local y un grupo de jóvenes deberán unir fuerzas para sobrevivir cuando el cardumen llega a la zona turística del lago.",
        stock: 5
    },
    {
        id: 81,
        nombre: "Megalodón",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJ8wfCtrQ2gelhAZzk6J9__OePttgv9GO0bziPNHzFaKYMv609nyZe20&s=10",
        categoria: "Acción / Ciencia Ficción",
        precio: 11500,
        sinapsis: "Creíamos que estaba extinto, pero solo estaba esperando en la fosa más profunda del océano.",
        descripción: "Un submarino de investigación es atacado en las profundidades del Pacífico por una criatura colosal que se creía desaparecida hace millones de años: un tiburón de más de veinte metros. Un experto en rescates en aguas profundas es reclutado para salvar a la tripulación atrapada.",
        stock: 9
    },
    {
        id: 82,
        nombre: "Anaconda",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQQE6YbdP_Xf5fxtdcjVZnfiLYgwl0fH7FDKgOsrJwwygK0xoM1RDVMg3&s=10",
        categoria: "Aventura / Suspenso",
        precio: 10000,
        sinapsis: "Si no puedes respirar, no puedes gritar: en la selva amazónica tú eres la presa.",
        descripción: "Un equipo de documentalistas navega por el río Amazonas en busca de una tribu indígena perdida. En el camino rescatan a un misterioso cazador que en realidad los manipula para desviar el barco e ir tras la pista de una serpiente gigante y letal.",
        stock: 6
    },
    {
        id: 83,
        nombre: "La Forma del Agua",
        imagen: "https://i0.wp.com/moviefilmsla.wordpress.com/wp-content/uploads/2018/01/forma_del_agua_wallpaper_1920x1080_moviefilms.jpg?ssl=1",
        categoria: "Fantasía / Romance",
        precio: 12500,
        sinapsis: "Un cuento de hadas moderno donde el amor no necesita palabras ni conoce de especies.",
        descripción: "En un laboratorio gubernamental de alta seguridad durante la Guerra Fría en los años sesenta, una trabajadora de limpieza muda lleva una vida solitaria hasta que descubre un experimento clasificado: un hombre anfibio cautivo con quien entabla un vínculo único.",
        stock: 7
    },
    {
        id: 84,
        nombre: "Beetlejuice",
        imagen: "https://wallpapercave.com/wp/wp14407666.jpg",
        categoria: "Comedia / Fantasía",
        precio: 12000,
        sinapsis: "Si los vivos invaden tu casa, solo tienes que pronunciar su nombre tres veces para desatar el caos.",
        descripción: "Un matrimonio de fantasmas novatos intenta sin éxito asustar a la insoportable familia de la ciudad que se ha mudado a su querida casa de campo. Desesperados, recurren a los servicios de un alocado y tramposo bioexorcista del más allá cuyos métodos ponen a todos en peligro.",
        stock: 8
    },
    {
        id: 85,
        nombre: "El Viaje de Chihiro",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzE8swmzvRT4SSMLV1x2LMfvsTt3CsPXL0NjLhLdgyBgLevoo3sA_mywY&s=10",
        categoria: "Animación / Fantasía",
        precio: 14500,
        sinapsis: "Cruza el túnel hacia un mundo de dioses y espíritus donde olvidar tu nombre significa no volver jamás.",
        descripción: "Durante el traslado de su familia a un nuevo hogar, una niña de diez años se adentra en un mundo mágico gobernado por dioses, brujas y espíritus. Cuando sus padres son transformados en cerdos por una hechicera, ella deberá trabajar en una casa de baños termales para encontrar la forma de liberarlos.",
        stock: 11
    },
    {
        id: 86,
        nombre: "Mi Vecino Totoro",
        imagen: "https://i.pinimg.com/736x/5a/7e/99/5a7e997ac1379eeab7cf637d3b079fd1.jpg",
        categoria: "Animación / Familiar",
        precio: 14000,
        sinapsis: "En el corazón del bosque vive un guardián gigante y peludo que solo los niños pueden ver.",
        descripción: "Dos pequeñas hermanas se mudan al campo con su padre para estar más cerca del hospital donde se recupera su madre. Mientras exploran su nueva casa y los alrededores, descubren que el bosque cercano está habitado por criaturas mágicas y espíritus ancestrales muy amigables.",
        stock: 10
    },
    {
        id: 87,
        nombre: "La Tumba de las Luciérnagas",
        imagen: "https://wallpapers.com/images/featured/tumba-de-los-luciernagas-m16obpp5lc8bnupf.jpg",
        categoria: "Animación / Drama",
        precio: 13500,
        sinapsis: "Un retrato conmovedor e inolvidable sobre el amor entre hermanos y la inocencia en tiempos de guerra.",
        descripción: "En los últimos meses de la Segunda Guerra Mundial en Japón, un adolescente y su pequeña hermana de cuatro años quedan huérfanos tras un bombardeo en su ciudad. Juntos intentan sobrevivir por su cuenta refugiándose en un búnker abandonado e iluminando sus noches con luciérnagas.",
        stock: 6
    },
    {
        id: 88,
        nombre: "El Niño y la Garza",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkM9IOW1r6omPtAI9GLXEUTbZff06JxpDRaZjrk01E7jnse94Q32b1RJU&s=10",
        categoria: "Animación / Fantasía",
        precio: 14500,
        sinapsis: "Una misteriosa torre abandonada esconde el umbral donde la vida y la muerte se entrelazan.",
        descripción: "Un joven marcado por la pérdida de su madre se muda a una gran finca en el campo junto a su padre y su nueva madrastra. Allí conoce a una peculiar garza gris parlante que lo guía hacia una antigua torre oculta en el bosque, adentrándose en un mundo fantástico lleno de secretos.",
        stock: 9
    },
    {
        id: 89,
        nombre: "El Increíble Castillo Vagabundo",
        imagen: "https://wallpapers.com/images/hd/intro-scene-howl-s-moving-castle-cml6b3ml1hxx1nk2.jpg",
        categoria: "Animación / Fantasía",
        precio: 14500,
        sinapsis: "Una maldición inesperada, un demonio de fuego y una fortaleza mecánica que camina entre las nubes.",
        descripción: "Una joven y tímida sombrerera es víctima del hechizo de una bruja celosa que la transforma en una anciana de noventa años. En su búsqueda para romper el encantamiento, se refugia en el castillo ambulante de un misterioso y apuesto mago que oculta sus propios tormentos.",
        stock: 10
    }

];

export default productos

