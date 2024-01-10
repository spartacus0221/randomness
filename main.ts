namespace SpriteKind {
    export const Sick = SpriteKind.create()
    export const Healthy = SpriteKind.create()
    export const Alright = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Healthy, SpriteKind.Sick, function (sprite, otherSprite) {
    sprite.setImage(assets.image`Sick`)
    sprite.setKind(SpriteKind.Sick)
    pause(3000)
    sprite.setImage(assets.image`Alright`)
    sprite.setKind(SpriteKind.Alright)
})
function SpawnHealthy (num: number) {
    for (let index = 0; index < num; index++) {
        HealthySprite = sprites.create(assets.image`Healthy`, SpriteKind.Healthy)
        HealthySprite.setPosition(randint(4, 116), randint(4, 116))
        HealthySprite.setVelocity(randint(-40, 40), randint(-40, 40))
        HealthySprite.setBounceOnWall(true)
    }
}
let HealthySprite: Sprite = null
let patientZero = sprites.create(assets.image`Sick`, SpriteKind.Sick)
patientZero.setVelocity(randint(-40, 40), randint(-40, 40))
patientZero.setBounceOnWall(true)
SpawnHealthy(70)
pause(5000)
patientZero.setImage(assets.image`Alright`)
patientZero.setKind(SpriteKind.Alright)
forever(function () {
    info.setScore(sprites.allOfKind(SpriteKind.Healthy).length)
})
