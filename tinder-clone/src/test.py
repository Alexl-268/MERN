import math

wallpaperWidth = float(input("wallpaperWidth: "))
wallpaperLength = float(input("wallpaperLength: "))
roomLength = float(input("roomLength: "))
roomWidth =float(input("roomWidth: "))
roomHeight = float(input("roomHeight: "))

roomArea = roomHeight*(2*roomLength+2*roomWidth)

longerSide = max(wallpaperLength, wallpaperWidth)
shorterSide = min(wallpaperLength, wallpaperWidth)

slicesPerRoll = math.floor(longerSide/roomHeight)

sliceArea = slicesPerRoll*shorterSide*roomHeight

print(math.ceil(roomArea/sliceArea))