import math
import pygame

COLORS = {"WEISS": (255, 255, 255), "ROT": (255, 0, 0), "GRUEN": (0, 255, 0), "BLAU": (0, 0, 255), "SCHWARZ": (0, 0, 0), "GELB": (255, 255, 0), "HELLBLAU": (0, 125, 227), "GRAU": (120, 120, 120), "HELLROT": (255, 153, 153), "HELLGELB": (255, 255, 153), "PINK": (255, 51, 255), "DUNKELBLAU": (0, 0, 153), "LAVENDER": (204, 153, 255), "HELLGRUEN": (153, 255, 204), "BRAUN": (102, 51, 0), "OLIVE": (153, 153, 0)}

COLOR_SEQ = ["WEISS", "ROT", "GRUEN", "BLAU", "SCHWARZ", "GELB", "HELLBLAU", "GRAU", "HELLROT", "HELLGELB", "PINK", "DUNKELBLAU", "LAVENDER", "HELLGRUEN", "BRAUN", "OLIVE"]



def berechne_apfel(auflösung, tiefe, grenze, x_min, x_max, y_min, y_max):
    breite = auflösung
    höhe = int(auflösung * (y_max - y_min) / (x_max - x_min))
    X = [x_min + i * (x_max - x_min) / auflösung for i in range(auflösung + 1)]
    Y = [y_min + i * (y_max - y_min) / auflösung for i in range(auflösung + 1)]
    apfel = [[0 for _ in range(len(X))] for __ in range(len(Y))]
    for i in range(len(X)):
        x1 = X[i]
        for j in range(len(Y)):
            y1 = Y[i]
            n = 0
            d = 0
            x = x1
            y = y1
            while d <= grenze and n <= tiefe:
                n += 1
                x, y = x**2 - y**2 + x1, 2 * x * y + y1
                d = math.sqrt(x**2 + y**2)
            apfel[i][j] = n % len(COLOR_SEQ)

    global apfelBild
    apfelBild = apfel
    global Bildbreite
    Bildbreite = breite
    global Bildhöhe
    Bildhöhe = höhe


def main_loop(surface, apfel):
    while True:
        for i in range(len(apfel[0])):
            for j in range(len(apfel)):
                surface.fill(COLORS[COLOR_SEQ[apfel[i][j]]], ((i, Bildhöhe - j), (1, 1)))
        pygame.display.flip()
        for event in pygame.event.get():
            if event.type == pygame.KEYDOWN:
                pygame.image.save(surface, "apfelmänchen.png")
                pygame.quit()
berechne_apfel(400, 200, 2.5, -2.5, 1.5, -2.0, 2.0)

pygame.init()
surface = pygame.display.set_mode((Bildbreite, Bildhöhe))
pygame.display.set_caption("Apfelmänchen")
main_loop(surface, apfelBild)